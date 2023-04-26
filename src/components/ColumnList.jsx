import React from 'react';
import { Task } from './Task';
import { useDrop } from 'react-dnd';
import '../styles/column.css';
import { Button } from '../layout/button/Button';

function ColumnList({ title, tasks, ...props }) {
    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'task',

        collect: (monitor) => ({ isOver: monitor.isOver() }),
    }));
    const backgroundColor = isOver ? '#64f50752' : 'white';

    if (title === 'To do') {
        return (
            <div
                {...props}
                onDrop={() => props.dropHandler(title)}
                ref={dropRef}
                style={{ backgroundColor, justifyContent: 'space-between' }}
                className={'red'}>
                <h2>{title}</h2>
                {tasks.map((task, index) => (
                    <Task
                        number={index + 1}
                        task={task}
                        onSelectTask={props.onSelectTask}
                        isSelected={task.id === props.currentTask}
                        editTask={props.editTask}
                        deleteTask={props.deleteTask}
                    />
                ))}

                <Button onClick={() => props.setModal(true)}>Add task</Button>
            </div>
        );
    }
    if (title === 'In progress') {
        return (
            <div
                onDrop={() => props.dropHandler(title)}
                ref={dropRef}
                style={{ backgroundColor }}
                className={'blue'}>
                <h2>{title}</h2>
                {tasks.map((task, index) => (
                    <Task
                        number={index + 1}
                        task={task}
                        onSelectTask={props.onSelectTask}
                        isSelected={task.id === props.currentTask}
                        editTask={props.editTask}
                        deleteTask={props.deleteTask}
                    />
                ))}
            </div>
        );
    }
    if (title === 'Done') {
        return (
            <div
                onDrop={() => props.dropHandler(title)}
                ref={dropRef}
                style={{ backgroundColor }}
                className={'green'}>
                <h2>{title}</h2>
                {tasks.map((task, index) => (
                    <Task
                        number={index + 1}
                        task={task}
                        onSelectTask={props.onSelectTask}
                        isSelected={task.id === props.currentTask}
                        editTask={props.editTask}
                        deleteTask={props.deleteTask}
                    />
                ))}
            </div>
        );
    }
}

export default ColumnList;
