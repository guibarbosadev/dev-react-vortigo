import React from 'react';
import { IUserContext, UserContext } from '../user/user-context';

export function withContext(children: any, value: IUserContext) {
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
