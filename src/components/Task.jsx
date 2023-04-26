import React from 'react';
import '../styles/task.css';
import { useDrag } from 'react-dnd';
import { Button } from '../layout/button/Button';

const Task = ({ children, number, task, ...props }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'task',
        item: { children, number, task },
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    }));

    function handleStart() {
        props.onSelectTask(task.id, task);
    }

    const backgroundColor = isDragging ? 'red' : 'white';

    return (
        <div
            onDragStart={handleStart}
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                backgroundColor,
            }}
            className='task'>
            <div className='task__content'>
                <h3>
                    {number}. {task.title}
                </h3>
                <span>{task.descr}</span>
            </div>
            <div className='task__buttons'>
                <Button onClick={() => props.editTask(task)}>Edit</Button>
                <Button onClick={() => props.deleteTask(task)}>Delete</Button>
            </div>
        </div>
    );
};

export { Task };
