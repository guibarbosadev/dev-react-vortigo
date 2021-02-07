import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

export const SignUpPage = () => {
    const history = useHistory();
    return (
        <Switch>
            <Route exact path="/sign-up/name">
                <FirstStep handleSubmit={() => history.push('/sign-up/favorite-pokemon')} />
            </Route>
            <Route exact path="/sign-up/favorite-pokemon">
                <SecondStep handleSubmit={() => {}} />
            </Route>
            <Redirect to="/sign-up/name" />
        </Switch>
    );
};
