import React from 'react';
import { Loading } from '../../components/Loading';
import { usePokemon } from '../../pokemon/pokemon-context';
import { PokemonList } from './PokemonList';
import { PokemonTypeSelector } from './PokemonTypeSelector/index';
import './style.css';

export const PokemonsPage = () => {
    const [isLoadingPokemonTypes, setIsLoadingPokemonTypes] = React.useState(true);
    const [isLoadingPokemons, setIsLoadingPokemons] = React.useState(true);
    const { pokemons, pokemonTypes, getPokemonTypes, getPokemons } = usePokemon();
    const attemptToGetPokemonTypes = React.useCallback(async () => {
        setIsLoadingPokemonTypes(true);
        await getPokemonTypes();
        setIsLoadingPokemonTypes(false);
    }, []);
    const attemptToGetPokemons = React.useCallback(async () => {
        setIsLoadingPokemons(true);
        await getPokemons();
        setIsLoadingPokemons(false);
    }, []);
    const getPokemonData = React.useCallback(() => {
        attemptToGetPokemonTypes();
        attemptToGetPokemons();
    }, []);

    React.useEffect(getPokemonData, []);

    return (
        <div className="pokemons">
            {isLoadingPokemonTypes ? <Loading /> : <PokemonTypeSelector pokemonTypes={pokemonTypes} />}
            {isLoadingPokemons ? <Loading /> : <PokemonList pokemons={pokemons} />}
        </div>
    );
};
