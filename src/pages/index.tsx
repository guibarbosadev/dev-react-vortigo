import React from 'react';
import { UserProvider } from '../user/user-context';
import { Routes } from './routes';

export default function () {
    return (
        <UserProvider>
            <Routes></Routes>
        </UserProvider>
    );
}
