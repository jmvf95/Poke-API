import React from 'react'
import { getPokemonData, getPokemons } from './api';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/SearchBar';
import Pokedex from './components/Pokedex';

const {useState, useEffect} = React;

function App() {

  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {

    try {

      setLoading(true);
      const data = await getPokemons(25, 25 * page);

      const promesas = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })

      const results = await Promise.all(promesas);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));

    } catch (error) {
      
    }

  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Navbar/>

      <div className='App'>
        <Searchbar/>
        <Pokedex pokemons={pokemons} page={page} setPage={setPage} total={total} loading={loading}/>
      </div>
    </div>

  );
}

export default App;
