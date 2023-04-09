import React from 'react';
import classes from './Button.module.css';

// const log = () => {
//     console.log('Worked');
// };

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
};

export { Button };
