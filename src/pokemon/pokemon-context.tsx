import React from 'react';
import type { IPokemonType } from './types';
import * as provider from './pokemon-provider';

export const defaultContextValue: IPokemonContext = {
    types: [],
    didLoad: false,
    getPokemonTypes: async () => {
        console.log('hihihi');
    }
};
export const PokemonContext = React.createContext(defaultContextValue);

export interface IPokemonContext {
    types: IPokemonType[];
    didLoad: boolean;
    getPokemonTypes: () => Promise<void>;
}

export function usePokemon() {
    return React.useContext(PokemonContext);
}

export function PokemonProvider(props: any) {
    const [types, setTypes] = React.useState<IPokemonType[]>([]);
    const [didLoad, setDidLoad] = React.useState(false);
    const getPokemonTypes = React.useCallback(async () => {
        console.log('here i am');
        const fetchedTypes = await provider.fetchPokemonTypes();
        setTypes(fetchedTypes);
        setDidLoad(true);
    }, []);
    const value = React.useMemo(() => ({ types, getPokemonTypes, didLoad }), [types, didLoad]);

    return <PokemonContext.Provider value={value} {...props} />;
}
