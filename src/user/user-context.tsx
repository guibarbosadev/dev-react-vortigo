import React from 'react';
import type { User } from './types';
import * as provider from './user-provider';
const initialContextValue: IUserContext = {
    user: null,
    getUser: async () => {},
    saveUser: async () => {},
    alreadyFetchedUser: false
};

export const UserContext = React.createContext<IUserContext>(initialContextValue);

export interface IUserContext {
    user: User | null;
    getUser: () => Promise<void>;
    saveUser: (user: User) => Promise<void>;
    alreadyFetchedUser: boolean;
}

export function useUser() {
    return React.useContext(UserContext);
}

export function UserProvider(props: any) {
    const [user, setUser] = React.useState<User | null>(null);
    const [alreadyFetchedUser, setAlreadyFetchedUser] = React.useState(false);

    const getUser = async () => {
        setUser(await provider.fetchUser());
        setAlreadyFetchedUser(true);
    };
    const saveUser = async (user: User) => {
        await provider.saveUser(user);
        setUser(user);
    };
    const value: IUserContext = React.useMemo(() => ({ user, setUser, getUser, alreadyFetchedUser, saveUser }), [user, alreadyFetchedUser]);

    return <UserContext.Provider value={value} {...props} />;
}
