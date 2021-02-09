import React from '../../../../web_modules/react.js';
import { Link } from '../../../../web_modules/react-router-dom.js';
import './style.css.proxy.js';
export const PokemonTypeSelector = props => {
  return /*#__PURE__*/React.createElement("ul", {
    className: "pokemonTypeSelector"
  }, props.pokemonTypes.map(({
    name,
    thumbnailImage
  }) => /*#__PURE__*/React.createElement("li", {
    key: name
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/pokemons/${name?.toLowerCase?.() ?? ''}`
  }, /*#__PURE__*/React.createElement("img", {
    alt: name,
    src: thumbnailImage
  }), name))));
};