import React from 'react';
import { Select } from '../../../components/Select';
import { AdvanceButton } from '../../../components/AdvanceButton';
import type { TPokemonType } from '../../../pokemon/types';
import type { User } from '../../../user/types';
import './style.css';

export interface IProps {
    handleBack: () => void;
    handleSubmit: (pokemonType: TPokemonType) => void;
    defaultValues?: User;
}

export const SecondStep: React.FC<IProps> = ({ defaultValues }) => {
    const onChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {}, []);
    const [pokemonType, setPokemonType] = React.useState<TPokemonType | undefined>(defaultValues?.favoritePokemonType);
    const options = React.useMemo(() => {
        return [
            {
                value: '0',
                label: 'Select your favorite pokemon type'
            },
            {
                value: 'water',
                label: 'Water'
            },
            {
                value: 'eletric',
                label: 'Eletric'
            },
            {
                value: 'fire',
                label: 'Fire'
            },
            {
                value: 'normal',
                label: 'Normal'
            }
        ];
    }, []);

    return (
        <form className="secondStepWrapper">
            <h2 className="title">Hello, trainer {defaultValues?.name}!</h2>
            <label htmlFor="pokemonTypeSelect">
                First we need to know your name...
                <Select options={options} value={pokemonType} onChange={onChange} />
            </label>
            <AdvanceButton />
        </form>
    );
};
