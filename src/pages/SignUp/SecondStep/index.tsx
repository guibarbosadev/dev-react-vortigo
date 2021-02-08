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

export const SecondStep: React.FC<IProps> = ({ defaultValues, handleSubmit }) => {
    const [pokemonType, setPokemonType] = React.useState<TPokemonType | undefined>(defaultValues?.favoritePokemonType);

    const isValid = React.useMemo(() => {
        const validPokemonTypes: TPokemonType[] = ['eletric', 'fire', 'normal', 'water'];
        const isValidPokemonType = validPokemonTypes.includes(pokemonType as TPokemonType);
        return isValidPokemonType;
    }, [pokemonType]);

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

    const onSubmit = React.useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (isValid && pokemonType) {
                handleSubmit(pokemonType);
            }
        },
        [pokemonType, isValid]
    );

    return (
        <form className="secondStepWrapper" onSubmit={onSubmit}>
            <h2 className="title">Hello, trainer {defaultValues?.name}!</h2>
            <label htmlFor="pokemonTypeSelect">
                First we need to know your name...
                <Select
                    options={options}
                    value={pokemonType}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPokemonType(event.target.value as TPokemonType)}
                />
            </label>
            <AdvanceButton type="submit" disabled={!isValid} />
        </form>
    );
};
