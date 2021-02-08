import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import type { User } from '../../user/types';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

export const SignUpPage = () => {
    const history = useHistory();
    const [values, setValues] = React.useState<User>();

    const advanceToSecondStep = React.useCallback(
        (name: string) => {
            const currentValues = values ? { ...values } : {};
            setValues({ ...currentValues, name, favoritePokemonType: values?.favoritePokemonType ?? 'water' });
            history.push('/sign-up/favorite-pokemon');
        },
        [values]
    );

    return (
        <Switch>
            <Route exact path="/sign-up/name">
                <FirstStep defaultValues={values} handleSubmit={advanceToSecondStep} />
            </Route>
            <Route exact path="/sign-up/favorite-pokemon">
                <SecondStep defaultValues={values} handleBack={history.goBack} handleSubmit={() => {}} />
            </Route>
            <Redirect to="/sign-up/name" />
        </Switch>
    );
};
