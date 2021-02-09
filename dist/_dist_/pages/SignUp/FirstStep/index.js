import React from '../../../../web_modules/react.js';
import { AdvanceButton } from '../../../components/AdvanceButton/index.js';
import './style.css.proxy.js';
export const FirstStep = props => {
  const [name, setName] = React.useState(props.defaultValues?.name || '');
  const onSubmit = React.useCallback(event => {
    event.preventDefault();
    props.handleSubmit(name);
  }, [name]);
  const handleChange = React.useCallback(event => {
    setName(event.target.value);
  }, []);
  return /*#__PURE__*/React.createElement("form", {
    className: "firstStepWrapper",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "Let's meet each other first?"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "nameInput"
  }, "First we need to know your name...", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "nameInput",
    value: name,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(AdvanceButton, null));
};