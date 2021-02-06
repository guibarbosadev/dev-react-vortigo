import React from 'react';
import { Redirect } from 'react-router-dom';
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

    React.useEffect(attemptToGetUser, []);

    return isLoading ? <Loading /> : user ? <div>HomePage</div> : <Redirect to="/sign-up" />;
};
