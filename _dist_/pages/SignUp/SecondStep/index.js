import React from '../../../../web_modules/react.js';
import { Select } from '../../../components/Select/index.js';
import { AdvanceButton } from '../../../components/AdvanceButton/index.js';
import './style.css.proxy.js';
export const SecondStep = ({
  defaultValues,
  handleSubmit
}) => {
  const [pokemonType, setPokemonType] = React.useState(defaultValues?.favoritePokemonType);
  const isValid = React.useMemo(() => {
    const validPokemonTypes = ['eletric', 'fire', 'normal', 'water'];
    const isValidPokemonType = validPokemonTypes.includes(pokemonType);
    return isValidPokemonType;
  }, [pokemonType]);
  const options = React.useMemo(() => {
    return [{
      value: '0',
      label: 'Select your favorite pokemon type'
    }, {
      value: 'water',
      label: 'Water'
    }, {
      value: 'eletric',
      label: 'Eletric'
    }, {
      value: 'fire',
      label: 'Fire'
    }, {
      value: 'normal',
      label: 'Normal'
    }];
  }, []);
  const onSubmit = React.useCallback(event => {
    event.preventDefault();

    if (isValid && pokemonType) {
      handleSubmit(pokemonType);
    }
  }, [pokemonType, isValid]);
  return /*#__PURE__*/React.createElement("form", {
    className: "secondStepWrapper",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "Hello, trainer ", defaultValues?.name, "!"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "pokemonTypeSelect"
  }, "...now tell us which is your favorite Pok\xE9mon type:", /*#__PURE__*/React.createElement(Select, {
    options: options,
    value: pokemonType,
    onChange: event => setPokemonType(event.target.value)
  })), /*#__PURE__*/React.createElement(AdvanceButton, {
    type: "submit",
    disabled: !isValid
  }));
};