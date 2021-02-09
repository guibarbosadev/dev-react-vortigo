function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import './style.css.proxy.js';
export const Logo = props => {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-testid": "logo",
    id: "logo"
  }, props), /*#__PURE__*/React.createElement("img", {
    alt: "Pokemon",
    srcSet: "/images/pokemon-logo.png 1x, /images/pokemon-logo@2x.png 2x, /images/pokemon-logo@3x.png 3x"
  }), /*#__PURE__*/React.createElement("img", {
    alt: "finder",
    className: "finder",
    srcSet: "/images/finder.png 1x, /images/finder@2x.png, /images/finder@3x.png 3x"
  }));
};