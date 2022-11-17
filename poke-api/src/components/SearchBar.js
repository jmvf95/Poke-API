import React from 'react'
import { searchPokemon } from '../api';
const {useState} = React;

const Searchbar = () => {

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
    <div className='searchBar-container'>
        <div className='searchBar'>
            <input placeholder='Buscar Pokemon...' onChange={onChange}/>
        </div>
        <div className='searchBar-btn'>
            <button onClick={onClick}>Buscar</button>
        </div>
    </div>
    )
}

export default Searchbar;