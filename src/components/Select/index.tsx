import React from 'react';

interface Option {
    value: string;
    label: string;
}

export interface IProps extends React.HTMLProps<HTMLSelectElement> {
    options: Option[];
}

export const Select: React.FC<IProps> = (props) => {
    return (
        <div className="select">
            <select {...props}>
                {props.options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};
