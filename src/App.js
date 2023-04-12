import React, { useState } from 'react';
import { Board } from './components/Board';
import { Header } from './layout/Header';
import { Column } from './components/Column';
import './App.css';
import { Modal } from './components/Modal';
import { Button } from './layout/button/Button';
import { Input } from './layout/input/Input';
import { Task } from './components/Task';

function App() {
    const [tasks, setTasks] = useState(
        localStorage.getItem('tasks')
            ? JSON.parse(localStorage.getItem('tasks'))
            : [],
    );
    const [task, setTask] = useState({ title: '', descr: '' });
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);

    // Сохраняет данные в localStorage
    const setTasksWithSave = (tasks) => {
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const editTask = (task) => {
        setModal(true);
        setEdit(true);
    };

    const addEditTask = (e) => {
        e.preventDefault();
        setEdit(false);
        setTasksWithSave({ ...task });
        setModal(false);
    };

    // Добавляет задачу
    const addNewTask = (e) => {
        e.preventDefault();
        setTasksWithSave([...tasks, { ...task, id: Date.now() }]);
        setTask({ title: '', descr: '' });
    };

    console.log(edit);

    // Удаляет задачу
    const deleteTask = (task) => {
        setTasksWithSave(tasks.filter((t) => t.id !== task.id));
    };

    return (
        <React.Fragment>
            {/* Модальное окно */}
            {edit ? (
                <Modal
                    visible={modal}
                    setVisible={setModal}
                    swichForm={setEdit}>
                    <form>
                        <Input value={task.title} type={'text'} />
                        <Input value={task.descr} type={'text'} />

                        <Button onClick={addEditTask}>Add editTask</Button>
                    </form>
                </Modal>
            ) : (
                <Modal
                    visible={modal}
                    setVisible={setModal}
                    swichForm={setEdit}>
                    <form>
                        <Input
                            value={task.title}
                            onChange={(e) =>
                                setTask({ ...task, title: e.target.value })
                            }
                            type={'text'}
                            placeholder={'Title task'}
                        />
                        <Input
                            value={task.descr}
                            onChange={(e) =>
                                setTask({ ...task, descr: e.target.value })
                            }
                            type={'text'}
                            placeholder={'Description task'}
                        />

                        <Button onClick={addNewTask}>Add</Button>
                    </form>
                </Modal>
            )}

            {/* Основной компонент приложения */}
            <Board>
                {/* Шапка */}
                <Header />

                {/* Общий контейнер */}
                <div className='column__container'>
                    {/* Компонент To Do */}
                    <Column title={'To Do'} color={'red'}>
                        {tasks.map((task, index) => {
                            return (
                                <Task
                                    key={task.id}
                                    number={index + 1}
                                    task={task}>
                                    <Button onClick={editTask}>Edit</Button>
                                    <Button onClick={() => deleteTask(task)}>
                                        Delete
                                    </Button>
                                </Task>
                            );
                        })}
                        <Button onClick={() => setModal(true)}>Add Task</Button>
                    </Column>

                    {/* Компонент In Progress */}
                    <Column title={'In Progress'} color={'yellow'} />

                    {/* Компонент Done */}
                    <Column title={'Done'} color={'green'} />
                </div>
            </Board>
        </React.Fragment>
    );
}

export { App };
