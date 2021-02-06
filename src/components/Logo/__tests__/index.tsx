import React from 'react';
import { Logo } from '..';
import { render } from '@testing-library/react';

describe('<Logo test case', () => {
    it('matches snapshot', () => {
        const { container } = render(<Logo />);

        expect(container).toMatchSnapshot();
    });

    it('has testid "logo"', () => {
        const { queryByTestId } = render(<Logo />);

        expect(queryByTestId('logo')).not.toBeNull();
    });
});
