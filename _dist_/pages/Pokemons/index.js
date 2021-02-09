import React from '../../../web_modules/react.js';
import { Loading } from '../../components/Loading/index.js';
import { usePokemon } from '../../pokemon/pokemon-context.js';
import { PokemonList } from './PokemonList/index.js';
import { PokemonTypeSelector } from './PokemonTypeSelector/index.js';
import './style.css.proxy.js';
export const PokemonsPage = () => {
  const [isLoadingPokemonTypes, setIsLoadingPokemonTypes] = React.useState(true);
  const [isLoadingPokemons, setIsLoadingPokemons] = React.useState(true);
  const {
    pokemons,
    pokemonTypes,
    getPokemonTypes,
    getPokemons
  } = usePokemon();
  const attemptToGetPokemonTypes = React.useCallback(async () => {
    setIsLoadingPokemonTypes(true);
    await getPokemonTypes();
    setIsLoadingPokemonTypes(false);
  }, []);
  const attemptToGetPokemons = React.useCallback(async () => {
    setIsLoadingPokemons(true);
    await getPokemons();
    setIsLoadingPokemons(false);
  }, []);
  const getPokemonData = React.useCallback(() => {
    attemptToGetPokemonTypes();
    attemptToGetPokemons();
  }, []);
  React.useEffect(getPokemonData, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "pokemons"
  }, isLoadingPokemonTypes ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(PokemonTypeSelector, {
    pokemonTypes: pokemonTypes
  }), isLoadingPokemons ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(PokemonList, {
    pokemons: pokemons
  }));
};