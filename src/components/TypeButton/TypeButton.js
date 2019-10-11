import React from 'react';
import './TypeButton.scss'

const TypeButton = ({ label, type , ...otherProps } ) => {
        let className = label === type ? "touched" : '';
    return (
        <button className={`sport-btn ${className}`}>
            {label}
        </button>
    )
};

export default TypeButton

