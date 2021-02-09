import React from '../../../web_modules/react.js';
export const Select = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "select"
  }, /*#__PURE__*/React.createElement("select", props, props.options.map(({
    value,
    label
  }) => /*#__PURE__*/React.createElement("option", {
    key: value,
    value: value
  }, label))));
};