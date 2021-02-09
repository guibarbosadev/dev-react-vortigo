import React from '../../../web_modules/react.js';
import { Link } from '../../../web_modules/react-router-dom.js';
import { Button } from '../../components/Button/index.js';
import { Logo } from '../../components/Logo/index.js';
import { Loading } from '../../components/Loading/index.js';
import { useUser } from '../../user/user-context.js';
import './style.css.proxy.js';
export const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const {
    user,
    getUser
  } = useUser();
  const attemptToGetUser = React.useCallback(() => {
    (async () => {
      setIsLoading(true);
      await getUser();
      setIsLoading(false);
    })();
  }, []);
  const nextRoute = React.useMemo(() => {
    let route = '/sign-up';

    if (user) {
      route = '/pokemons';
    }

    return route;
  }, [user]);
  React.useEffect(attemptToGetUser, []);
  return isLoading ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "linkButton",
    to: nextRoute
  }, /*#__PURE__*/React.createElement(Button, null, "Let's go!"))), /*#__PURE__*/React.createElement("img", {
    alt: "Pikachu dabbing",
    className: "pikachu",
    srcSet: "/images/pikachu.png 1x, /images/pikachu@2x.png 2x, /images/pikachu@3x.png 3x"
  }));
};