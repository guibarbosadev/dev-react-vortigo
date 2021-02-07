import React from 'react';
import type { TPokemonType } from '../../../pokemon/types';

export interface IProps {
    handleSubmit: (pokemonType: TPokemonType) => void;
}

export const SecondStep: React.FC<IProps> = () => {
    return <div>SecondStep</div>;
};
