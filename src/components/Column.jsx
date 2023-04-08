import React from 'react';
import '../styles/column.css';

function Column(props) {
    return (
        <div className={props.color}>
            <h2>{props.title}</h2>
        </div>
    );
}

export { Column };
