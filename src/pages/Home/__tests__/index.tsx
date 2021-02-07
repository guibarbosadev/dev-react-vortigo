import React from 'react';
import { HomePage } from '..';
import { render, screen } from '@testing-library/react';

describe('<HomePage />', () => {
    it('shows logo', () => {
        render(<HomePage />);
        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders "lets go" button', () => {
        render(<HomePage />);

        const submitButton = screen.getByRole('button', { name: /Let's go!/i });
        expect(submitButton).toBeInTheDocument();
    });

    it('renders "Pikachu dabbing" image', () => {
        render(<HomePage />);
        const pokemonImage = screen.getByAltText('Pikachu dabbing');
        expect(pokemonImage).toBeInTheDocument();
    });
});
