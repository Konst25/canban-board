import React from 'react';
import '../styles/column.css';

function Column({ children, color, title }) {
    return (
        <div className={color}>
            <h2>{title}</h2>
            <div className='column__content'></div>
            {children}
        </div>
    );
}

export { Column };
