export const searchPokemon = async (pokemon) => {
    try {

        /* Nos conectamos a la API de pokemos y le pasamos la variable del pokemon que vamos a buscar, previamente pasado en la funcion searchPokemon */
        let url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        /**
         * Utilizamos la API fetch para hacer una peticion a la url que hemos designado arriba
         */
        const response = await fetch(url);

        /**
         * Recibimos un data en el cual tratamos la respuesta en formato JSON
         */
        const data = await response.json();

        /**
         * Devolvemos el data que hemos conseguido de la API
         */
        return data;
        
    } catch (error) {
        
    }
}

export const getPokemons = async (limit = 25, offset = 0) => {

    try {

        /* Nos conectamos a la API de pokemos y le pasamos la variable del pokemon que vamos a buscar, previamente pasado en la funcion searchPokemon */
        let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        /**
         * Utilizamos la API fetch para hacer una peticion a la url que hemos designado arriba
         */
        const response = await fetch(url);

        /**
         * Recibimos un data en el cual tratamos la respuesta en formato JSON
         */
        const data = await response.json();

        /**
         * Devolvemos el data que hemos conseguido de la API
         */
        return data;
        
    } catch (error) {
        
    }

}

export const getPokemonData = async (url) => {

    try {
        /**
        * Utilizamos la API fetch para hacer una peticion a la url que hemos designado arriba
        */
        const response = await fetch(url);
        
        /**
        * Recibimos un data en el cual tratamos la respuesta en formato JSON
         */
        const data = await response.json();

        return data;
        
    } catch (error) {
        
    }
}