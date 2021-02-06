import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '..';

describe('<Home /> test case', () => {
    it('shows logo', () => {
        render(<Home />);
        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders "lets go" button', () => {
        render(<Home />);

        const submitButton = screen.getByRole('button', { name: /Let's go!/i });
        expect(submitButton).toBeInTheDocument();
    });

    it('renders "Pikachu dabbing" image', () => {
        render(<Home />);
        const pokemonImage = screen.getByAltText('Pikachu dabbing');
        expect(pokemonImage).toBeInTheDocument();
    });
});
