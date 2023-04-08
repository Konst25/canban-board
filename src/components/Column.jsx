import React from 'react';
import '../styles/column.css';

function Column(props) {
    let classButton = '';
    if (props.button) {
        classButton = 'button';
    } else {
        classButton = 'hidden';
    }
    console.log(props.button);
    return (
        <div className={props.color}>
            <h2>{props.title}</h2>
            <div className='column__content'></div>
            <button className={classButton}>Add task</button>
        </div>
    );
}

export { Column };
