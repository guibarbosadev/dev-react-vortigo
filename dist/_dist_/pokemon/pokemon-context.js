function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
import * as provider from './pokemon-provider.js';
export const defaultContextValue = {
  pokemonTypes: [],
  pokemons: [],
  getPokemonTypes: async () => {},
  getPokemons: async () => {}
};
export const PokemonContext = /*#__PURE__*/React.createContext(defaultContextValue);
export function usePokemon() {
  return React.useContext(PokemonContext);
}
export function PokemonProvider(props) {
  const [pokemonTypes, setPokemonTypes] = React.useState([]);
  const [pokemons, setPokemons] = React.useState([]);
  const getPokemonTypes = React.useCallback(async () => {
    const fetchedTypes = await provider.fetchPokemonTypes();
    setPokemonTypes(fetchedTypes);
  }, []);
  const getPokemons = React.useCallback(async () => {
    const fetchedPokemons = await provider.fetchPokemons();
    setPokemons(fetchedPokemons);
  }, []);
  const value = React.useMemo(() => ({
    pokemonTypes,
    getPokemonTypes,
    getPokemons,
    pokemons
  }), [pokemonTypes, pokemons]);
  return /*#__PURE__*/React.createElement(PokemonContext.Provider, _extends({
    value: value
  }, props));
}