import React from 'react';

export const Logo = () => {
    return (
        <div data-testid="logo">
            <img alt="Pokemon" srcSet="pokemon-logo.png 1x, pokemon-logo@2x.png 2x, pokemon-logo@3x.png 3x" />
            <img alt="finder" className="finder" srcSet="finder.png, finder@2x.png, finder@3x.png 3x" />
        </div>
    );
};
