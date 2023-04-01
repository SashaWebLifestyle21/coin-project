import React, {PropsWithChildren} from 'react';
import './Title.scss'

interface ITitle extends PropsWithChildren {
    className?: string
}

const Title = ({ children, className }: ITitle) => {
    return (
        <h2 className={`title ${className}`}>{children}</h2>
    );
};

export default Title;