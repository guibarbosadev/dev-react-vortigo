import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { FirstStep, IProps } from '..';
import userEvent from '@testing-library/user-event';

describe('<FirstStep /> test case', () => {
    let props: IProps = {
        onAdvance: () => {}
    };

    it(`showns "Let's meet each other first?" text`, () => {
        render(<FirstStep {...props} />);
        expect(screen.getByText(`Let's meet each other first?`)).toBeInTheDocument();
    });

    it(`showns "First wee need to know your name..." label`, () => {
        render(<FirstStep {...props} />);
        expect(screen.getByLabelText('First we need to know your name...')).toBeInTheDocument();
    });

    it('calls props.onAdvance', () => {
        props.onAdvance = jest.fn();
        render(<FirstStep {...props} />);
        const text = 'Some name';
        const nameInput = screen.getByLabelText('First we need to know your name...');
        const submitButton = screen.getByRole('button');

        expect(props.onAdvance).not.toHaveBeenCalled();
        act(() => {
            userEvent.type(nameInput, text);
        });
        userEvent.click(submitButton);
        expect(props.onAdvance).toHaveBeenCalled();
    });
});
