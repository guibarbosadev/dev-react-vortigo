import React from 'react';
import { FirstStep, IProps } from '..';
import { render, screen } from '@testing-library/react';

describe('<FirstStep />', () => {
    let props: IProps = {
        onAdvance: () => {}
    };

    it('shows logo', () => {
        render(<FirstStep {...props} />);
        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders "lets go" button', () => {
        render(<FirstStep {...props} />);

        const submitButton = screen.getByRole('button', { name: /Let's go!/i });
        expect(submitButton).toBeInTheDocument();
    });

    it('renders "Pikachu dabbing" image', () => {
        render(<FirstStep {...props} />);
        const pokemonImage = screen.getByAltText('Pikachu dabbing');
        expect(pokemonImage).toBeInTheDocument();
    });
});
