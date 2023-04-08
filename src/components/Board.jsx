import React from 'react';
import '../styles/board.css';

function Board(props) {
    return (
        <div className='background'>
            <div className='container'>{props.children}</div>
        </div>
    );
}

export { Board };
