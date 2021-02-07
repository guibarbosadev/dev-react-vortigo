import React from 'react';

export interface IProps {
    onAdvance: () => void;
}

export const FirstStep: React.FC<IProps> = ({ onAdvance }) => {
    return <div>FirstStep</div>;
};
