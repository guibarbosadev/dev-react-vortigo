import axios from '../../web_modules/axios.js';
export async function fetchPokemonTypes() {
  let types = [];

  try {
    const response = await axios.get('https://run.mocky.io/v3/0a6cb8c7-1305-487f-bf6b-3f41524b93bf');
    types = response.data.results;
  } catch {}

  return types;
}
export async function fetchPokemons() {
  let pokemons = [];
  const pokemonsIds = new Set();

  try {
    const response = await axios.get('https://run.mocky.io/v3/171490ba-e140-4ce9-9efe-8d319ccd3406');
    pokemons = response.data;
    pokemons = pokemons.filter(({
      id
    }) => {
      const isNotDuplicated = !pokemonsIds.has(id);
      pokemonsIds.add(id);
      return isNotDuplicated;
    });
  } catch {}

  return pokemons;
}