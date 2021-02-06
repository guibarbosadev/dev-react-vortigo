import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FirstStep } from './FirstStep';

export const SignUpPage = () => {
    return (
        <Switch>
            <Route path="/">
                <FirstStep onAdvance={() => {}} />
            </Route>
        </Switch>
    );
};
