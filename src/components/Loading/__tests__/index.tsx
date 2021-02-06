import { render, screen } from '@testing-library/react';
import React from 'react';
import { Loading } from '..';

describe('<Loading />', () => {
    it('matches snapshot', () => {
        const { container } = render(<Loading />);

        expect(container).toMatchSnapshot();
    });

    it('has testid = "loading"', () => {
        render(<Loading />);
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });
});
