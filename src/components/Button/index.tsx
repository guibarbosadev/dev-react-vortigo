import React from 'react';
import './style.css';

export interface IProps extends React.HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<IProps> = (props) => {
    return <button {...props} />;
};
