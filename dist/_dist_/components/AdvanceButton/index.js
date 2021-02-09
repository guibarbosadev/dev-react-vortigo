function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import './style.css.proxy.js';
export const AdvanceButton = props => {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "advanceButton",
    role: "button",
    alt: "advance button"
  }, props));
};