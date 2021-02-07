import React from 'react';
import type { User } from './types';
import { fetchUser } from './user-provider';

export const UserContext = React.createContext<IUserContext>({ user: null, getUser: async () => {}, alreadyFetchedUser: false });

export interface IUserContext {
    user: User | null;
    getUser: () => Promise<void>;
    alreadyFetchedUser: boolean;
}

export function useUser() {
    return React.useContext(UserContext);
}

export function UserProvider(props: any) {
    const [user, setUser] = React.useState<User | null>(null);
    const [alreadyFetchedUser, setAlreadyFetchedUser] = React.useState(false);

    const getUser = async () => {
        setUser(await fetchUser());
        setAlreadyFetchedUser(true);
    };
    const value: IUserContext = React.useMemo(() => ({ user, setUser, getUser, alreadyFetchedUser }), [user, alreadyFetchedUser]);

    return <UserContext.Provider value={value} {...props} />;
}
