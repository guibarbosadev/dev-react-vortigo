function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
import * as provider from './user-provider.js';
const defaultContextValue = {
  user: null,
  getUser: async () => {},
  saveUser: async () => {},
  alreadyFetchedUser: false
};
export const UserContext = /*#__PURE__*/React.createContext(defaultContextValue);
export function useUser() {
  return React.useContext(UserContext);
}
export function UserProvider(props) {
  const [user, setUser] = React.useState(null);
  const [alreadyFetchedUser, setAlreadyFetchedUser] = React.useState(false);

  const getUser = async () => {
    setUser(await provider.fetchUser());
    setAlreadyFetchedUser(true);
  };

  const saveUser = async user => {
    await provider.saveUser(user);
    setUser(user);
  };

  const value = React.useMemo(() => ({
    user,
    setUser,
    getUser,
    alreadyFetchedUser,
    saveUser
  }), [user, alreadyFetchedUser]);
  return /*#__PURE__*/React.createElement(UserContext.Provider, _extends({
    value: value
  }, props));
}