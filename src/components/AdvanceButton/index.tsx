import React from 'react';
import './style.css';

export interface IProps extends React.HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
}

export const AdvanceButton: React.FC<IProps> = (props) => {
    return <button className="advanceButton" role="button" alt="advance button" {...props} />;
};
