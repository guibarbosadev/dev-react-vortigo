import React from 'react';
import { usePokemon } from '../../pokemon/pokemon-context';
import { PokemonTypeSelector } from './PokemonTypeSelector/index';
import { Loading } from '../../components/Loading';
import './style.css';
import { useParams } from 'react-router-dom';

export const PokemonsPage = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const { types, getPokemonTypes } = usePokemon();
    const { pokemonType } = useParams<{ pokemonType: string }>();
    const attemptToGetPokemonTypes = React.useCallback(() => {
        console.log('dsasad');
        (async () => {
            setIsLoading(true);
            console.log('heyy');
            await getPokemonTypes();
            setIsLoading(false);
        })();
    }, []);

    React.useEffect(attemptToGetPokemonTypes, []);

    return <div className="pokemons">{isLoading ? <Loading /> : <PokemonTypeSelector pokemonTypes={types} />}</div>;
};
