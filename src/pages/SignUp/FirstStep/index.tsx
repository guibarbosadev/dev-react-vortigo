import React from 'react';
import { Button } from '../../../components/Button';
import { Logo } from '../../../../src/components/Logo';

export interface IProps {
    onAdvance: () => void;
}

export const FirstStep: React.FC<IProps> = ({ onAdvance }) => {
    return (
        <div className="wrapper">
            <Logo />
            <div className="main">
                <Button onClick={onAdvance}>Let's go!</Button>
            </div>
            <img alt="Pikachu dabbing" className="pikachu" srcSet="/images/pikachu.png 1x, /images/pikachu@2x.png 2x, /images/pikachu@3x.png 3x" />
        </div>
    );
};
