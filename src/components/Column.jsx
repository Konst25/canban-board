import React from 'react';
import { Task } from './Task';
import '../styles/column.css';

function Column() {
    return (
        <React.Fragment>
            <div className='columns'>
                <div className='container'>
                    <div className='column_container'>
                        <Task />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export { Column };
