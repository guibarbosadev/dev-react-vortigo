import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { SignUpPage } from './SignUp/index';
import { HomePage } from './Home/index';
import { useUser } from '../user/user-context';

export const Routes = () => {
    const { user } = useUser();

    return (
        <Router>
            <Switch>
                {!user && <Route path="/sign-up" component={SignUpPage}></Route>}
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};
