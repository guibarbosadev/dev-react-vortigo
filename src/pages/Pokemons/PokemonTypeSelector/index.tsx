import React from 'react';
import { Link } from 'react-router-dom';
import type { IPokemonType } from '../../../pokemon/types';
import './style.css';

interface IProps {
    pokemonTypes: IPokemonType[];
}

export const PokemonTypeSelector: React.FC<IProps> = (props) => {
    return (
        <ul className="pokemonTypeSelector">
            {props.pokemonTypes.map(({ name, thumbnailImage }) => (
                <li key={name}>
                    <Link to={`/pokemons/${name?.toLowerCase?.() ?? ''}`}>
                        <img alt={name} src={thumbnailImage} />
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
