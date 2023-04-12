import React from 'react';
import '../styles/task.css';

const Task = ({ children, number, task }) => {
    return (
        <div className='task'>
            <div className='task__content'>
                <h3>
                    {number}. {task.title}
                </h3>
                <span>{task.descr}</span>
            </div>
            <div className='task__buttons'>{children}</div>
        </div>
    );
};

export { Task };
