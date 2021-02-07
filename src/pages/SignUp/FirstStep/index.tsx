import React from 'react';
import { AdvanceButton } from '../../../components/AdvanceButton';
import './style.css';

export interface IProps {
    onAdvance: (name: string) => void;
}

export const FirstStep: React.FC<IProps> = ({ onAdvance }) => {
    const [name, setName] = React.useState('');
    const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdvance(name);
    }, []);
    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }, []);

    return (
        <form className="signUpWrapper" onSubmit={handleSubmit}>
            <h2 className="title">Let's meet each other first?</h2>
            <label htmlFor="nameInput">
                First we need to know your name...
                <input type="text" id="nameInput" value={name} onChange={handleChange} />
            </label>
            <AdvanceButton />
        </form>
    );
};
