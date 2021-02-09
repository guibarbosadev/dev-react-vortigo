import React from '../../web_modules/react.js';
import { Switch, BrowserRouter as Router, Route, Redirect } from '../../web_modules/react-router-dom.js';
import { SignUpPage } from './SignUp/index.js';
import { HomePage } from './Home/index.js';
import { useUser } from '../user/user-context.js';
import { PokemonsPage } from './Pokemons/index.js';
export const Routes = () => {
  const {
    user,
    alreadyFetchedUser
  } = useUser();
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Switch, null, alreadyFetchedUser && !user && /*#__PURE__*/React.createElement(Route, {
    path: "/sign-up",
    component: SignUpPage
  }), user && /*#__PURE__*/React.createElement(Route, {
    path: "/pokemons",
    component: PokemonsPage
  }), user && /*#__PURE__*/React.createElement(Route, {
    path: "/pokemons/:pokemonType",
    component: PokemonsPage
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    component: HomePage
  }), /*#__PURE__*/React.createElement(Redirect, {
    to: "/"
  })));
};