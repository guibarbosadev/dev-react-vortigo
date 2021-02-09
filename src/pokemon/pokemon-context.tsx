import React from 'react';
import type { IPokemon, IPokemonType } from './types';
import * as provider from './pokemon-provider';

export const defaultContextValue: IPokemonContext = {
    pokemonTypes: [],
    pokemons: [],
    getPokemonTypes: async () => {},
    getPokemons: async () => {}
};
export const PokemonContext = React.createContext(defaultContextValue);

export interface IPokemonContext {
    pokemonTypes: IPokemonType[];
    pokemons: IPokemon[];
    getPokemonTypes: () => Promise<void>;
    getPokemons: () => Promise<void>;
}

export function usePokemon() {
    return React.useContext(PokemonContext);
}

export function PokemonProvider(props: any) {
    const [pokemonTypes, setPokemonTypes] = React.useState<IPokemonType[]>([]);
    const [pokemons, setPokemons] = React.useState<IPokemon[]>([]);
    const getPokemonTypes = React.useCallback(async () => {
        const fetchedTypes = await provider.fetchPokemonTypes();
        setPokemonTypes(fetchedTypes);
    }, []);
    const getPokemons = React.useCallback(async () => {
        const fetchedPokemons = await provider.fetchPokemons();
        setPokemons(fetchedPokemons);
    }, []);
    const value = React.useMemo<IPokemonContext>(() => ({ pokemonTypes, getPokemonTypes, getPokemons, pokemons }), [pokemonTypes, pokemons]);

    return <PokemonContext.Provider value={value} {...props} />;
}
