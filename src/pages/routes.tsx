import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { SignUpPage } from './SignUp/index';
import { HomePage } from './Home/index';
import { useUser } from '../user/user-context';
import { PokemonsPage } from './Pokemons';

export const Routes = () => {
    const { user, alreadyFetchedUser } = useUser();

    return (
        <Router>
            <Switch>
                {alreadyFetchedUser && !user && <Route path="/sign-up" component={SignUpPage} />}
                {user && <Route path="/pokemons" component={PokemonsPage} />}
                <Route exact path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
