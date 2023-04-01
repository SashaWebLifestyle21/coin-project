import React, {PropsWithChildren} from 'react';
import './Button.scss'

interface IButton extends PropsWithChildren {
    onClick?: () => void
    className?: string
}

const Button = ({ onClick, children, className }: IButton) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;