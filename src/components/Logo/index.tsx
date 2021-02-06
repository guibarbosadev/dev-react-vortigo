import React from 'react';
import './style.css';

export interface IProps extends React.HTMLProps<HTMLDivElement> {}

export const Logo: React.FC<IProps> = (props) => {
    return (
        <div data-testid="logo" id="logo" {...props}>
            <img alt="Pokemon" srcSet="/images/pokemon-logo.png 1x, /images/pokemon-logo@2x.png 2x, /images/pokemon-logo@3x.png 3x" />
            <img alt="finder" className="finder" srcSet="/images/finder.png 1x, /images/finder@2x.png, /images/finder@3x.png 3x" />
        </div>
    );
};
