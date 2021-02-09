import React from '../../../web_modules/react.js';
import { Redirect, Route, Switch, useHistory } from '../../../web_modules/react-router-dom.js';
import { FirstStep } from './FirstStep/index.js';
import { SecondStep } from './SecondStep/index.js';
import { useUser } from '../../user/user-context.js';
export const SignUpPage = () => {
  const history = useHistory();
  const [values, setValues] = React.useState();
  const {
    saveUser
  } = useUser();
  const advanceToSecondStep = React.useCallback(name => {
    const currentValues = values ? { ...values
    } : {};
    setValues({ ...currentValues,
      name,
      favoritePokemonType: values?.favoritePokemonType ?? 'water'
    });
    history.push('/sign-up/favorite-pokemon');
  }, [values]);
  const handleSubmit = React.useCallback(async favoritePokemonType => {
    const user = {
      name: values?.name ?? '',
      favoritePokemonType
    };
    await saveUser(user);
    history.push('/pokemons');
  }, [values]);
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/sign-up/name"
  }, /*#__PURE__*/React.createElement(FirstStep, {
    defaultValues: values,
    handleSubmit: advanceToSecondStep
  })), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/sign-up/favorite-pokemon"
  }, /*#__PURE__*/React.createElement(SecondStep, {
    defaultValues: values,
    handleBack: history.goBack,
    handleSubmit: handleSubmit
  })), /*#__PURE__*/React.createElement(Redirect, {
    to: "/sign-up/name"
  }));
};