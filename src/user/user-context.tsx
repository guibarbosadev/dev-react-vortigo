import React from 'react';
import type { User } from './types';
import { fetchUser, saveUser } from './user-provider';

export const UserContext = React.createContext<IUserContext>({ user: null, getUser: async () => {} });

export interface IUserContext {
    user: User | null;
    getUser: () => Promise<void>;
}

export function useUser() {
    return React.useContext(UserContext);
}

export function UserProvider(props: any) {
    const [user, setUser] = React.useState<User | null>(null);
    const getUser = async () => {
        setUser(await fetchUser());
    };
    const value: IUserContext = React.useMemo(() => ({ user, setUser, getUser }), [user]);

    return <UserContext.Provider value={value} {...props} />;
}
