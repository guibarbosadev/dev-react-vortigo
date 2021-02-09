import React from '../../../../web_modules/react.js';
import style from './style.module.css.proxy.js';
export const PokemonList = ({
  pokemons
}) => {
  const [orderedPokemons, setOrderedPokemons] = React.useState([...pokemons]);
  const [orderBy, setOrderBy] = React.useState('noOrder');
  const iconOrderBy = React.useMemo(() => {
    const structure = {
      asc: '⬆',
      desc: '⬇',
      noOrder: '⬇'
    };
    return structure[orderBy];
  }, [orderBy]);
  const reorderPokemons = React.useCallback(() => {
    switch (orderBy) {
      case 'asc':
        setOrderedPokemons(pokemons.sort((previous, current) => {
          return current.name.localeCompare(previous.name);
        }));
        setOrderBy('desc');
        break;

      case 'desc':
      case 'noOrder':
        setOrderedPokemons(pokemons.sort((previousPokemon, currentPokemon) => {
          return previousPokemon.name.localeCompare(currentPokemon.name);
        }));
        setOrderBy('asc');
        break;
    }
  }, [orderBy]);
  return /*#__PURE__*/React.createElement("div", {
    className: style.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: style.header
  }, /*#__PURE__*/React.createElement("h4", null, "Pokemon"), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("button", {
    onClick: reorderPokemons
  }, "Name ", iconOrderBy))), /*#__PURE__*/React.createElement("ul", {
    className: style.pokemonList
  }, orderedPokemons.map(pokemon => /*#__PURE__*/React.createElement("li", {
    key: pokemon.id
  }, /*#__PURE__*/React.createElement("img", {
    alt: pokemon.thumbnailAltText,
    src: pokemon.thumbnailImage
  }), pokemon.name))));
};