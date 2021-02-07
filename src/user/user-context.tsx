import React from 'react';
import type { User } from './types';
import { fetchUser, saveUser } from './user-provider';

export const UserContext = React.createContext<IUserContext>({ user: null, getUser: async () => {}, hasNoUser: false });

export interface IUserContext {
    user: User | null;
    getUser: () => Promise<void>;
    hasNoUser: boolean;
}

export function useUser() {
    return React.useContext(UserContext);
}

export function UserProvider(props: any) {
    const [user, setUser] = React.useState<User | null>(null);
    const [hasNoUser, setHasNoUser] = React.useState(false);

    const getUser = async () => {
        setUser(await fetchUser());
        setHasNoUser(!!user);
    };
    const value: IUserContext = React.useMemo(() => ({ user, setUser, getUser, hasNoUser: false }), [user, hasNoUser]);

    return <UserContext.Provider value={value} {...props} />;
}
