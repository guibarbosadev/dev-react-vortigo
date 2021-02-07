import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Loading } from '../../components/Loading';
import { useUser } from '../../user/user-context';
import './style.css';

export const HomePage = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const { user, getUser } = useUser();

    const attemptToGetUser = React.useCallback(() => {
        (async () => {
            setIsLoading(true);
            await getUser();
            setIsLoading(false);
        })();
    }, []);

    const nextRoute = React.useMemo(() => {
        let route = '/sign-up';

        if (user) {
            route = '/pokemons';
        }

        return route;
    }, [user]);

    React.useEffect(attemptToGetUser, []);

    return isLoading ? (
        <Loading />
    ) : user ? (
        <div className="wrapper">
            <Logo />
            <div className="main">
                <Link className="linkButton" to={nextRoute}>
                    <Button>Let's go!</Button>
                </Link>
            </div>
            <img alt="Pikachu dabbing" className="pikachu" srcSet="/images/pikachu.png 1x, /images/pikachu@2x.png 2x, /images/pikachu@3x.png 3x" />
        </div>
    ) : (
        <Redirect to="/sign-up" />
    );
};
