import React from '../../web_modules/react.js';
import { UserContext } from '../user/user-context.js';
export function withContext(children, value) {
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: value
  }, children);
}