import React from 'react';
import './style.css';

export interface IProps extends React.HTMLProps<HTMLDivElement> {}

export const Loading: React.FC<IProps> = (props) => {
    return <div data-testid="loading" id="loading" {...props} />;
};
