import type { IPokemon } from '../../../pokemon/types';
import React from 'react';
import style from './style.module.css';

export interface IProps {
    pokemons: IPokemon[];
}

type TOrderBy = 'asc' | 'desc' | 'noOrder';

export const PokemonList: React.FC<IProps> = ({ pokemons }) => {
    const [orderedPokemons, setOrderedPokemons] = React.useState<IPokemon[]>([...pokemons]);
    const [orderBy, setOrderBy] = React.useState<TOrderBy>('noOrder');
    const iconOrderBy = React.useMemo(() => {
        const structure: { [key in TOrderBy]: string } = {
            asc: '⬆',
            desc: '⬇',
            noOrder: '⬇'
        };

        return structure[orderBy];
    }, [orderBy]);
    const reorderPokemons = React.useCallback(() => {
        switch (orderBy) {
            case 'asc':
                setOrderedPokemons(
                    pokemons.sort((previous, current) => {
                        return current.name.localeCompare(previous.name);
                    })
                );
                setOrderBy('desc');
                break;
            case 'desc':
            case 'noOrder':
                setOrderedPokemons(
                    pokemons.sort((previousPokemon, currentPokemon) => {
                        return previousPokemon.name.localeCompare(currentPokemon.name);
                    })
                );
                setOrderBy('asc');
                break;
        }
    }, [orderBy]);

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h4>Pokemon</h4>
                <h4>
                    <button onClick={reorderPokemons}>Name {iconOrderBy}</button>
                </h4>
            </div>
            <ul className={style.pokemonList}>
                {orderedPokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <img alt={pokemon.thumbnailAltText} src={pokemon.thumbnailImage} />
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
