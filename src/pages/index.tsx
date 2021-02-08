import React from 'react';
import { UserProvider } from '../user/user-context';
import { PokemonProvider } from '../pokemon/pokemon-context';
import { Routes } from './routes';

export default function () {
    return (
        <UserProvider>
            <PokemonProvider>
                <Routes></Routes>
            </PokemonProvider>
        </UserProvider>
    );
}
