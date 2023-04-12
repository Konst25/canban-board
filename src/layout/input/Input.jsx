import React from 'react';
import classes from './Input.module.css';

const Input = ({ type, placeholder, ...props }) => {
    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            className={classes.myInput}
        />
    );
};

export { Input };
