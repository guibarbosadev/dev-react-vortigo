import React from '../../web_modules/react.js';
import { UserProvider } from '../user/user-context.js';
import { PokemonProvider } from '../pokemon/pokemon-context.js';
import { Routes } from './routes.js';
export default function () {
  return /*#__PURE__*/React.createElement(UserProvider, null, /*#__PURE__*/React.createElement(PokemonProvider, null, /*#__PURE__*/React.createElement(Routes, null)));
}