import React, { useState } from 'react';
import { Board } from './components/Board';
import { Header } from './layout/Header';
import './App.css';
import { Modal } from './components/Modal';
import { Button } from './layout/button/Button';
import { Input } from './layout/input/Input';
import ColumnList from './components/ColumnList';

function App() {
    // Состояния колонок
    const [columns, setColumns] = useState([
        { id: 1, title: 'To do', color: 'red' },
        { id: 2, title: 'In Prosess', color: 'blue' },
        { id: 3, title: 'Done', color: 'green' },
    ]);

    // Состояния задач
    const [tasks, setTasks] = useState(
        localStorage.getItem('tasks')
            ? JSON.parse(localStorage.getItem('tasks'))
            : [],
    );
    const [task, setTask] = useState({ title: '', descr: '' });
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    let copy = {};
    const statuses = ['To do', 'In progress', 'Done'];

    // Выбирает статус
    const getTasksByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    // Открывает форму редактирования
    const editTask = (task) => {
        setModal(true);
        setEdit(true);
        copy = Object.assign(copy, task);
        deleteTask(task);
        setTask(copy);
    };

    // Добавляет отредактированную задачу
    const addEditTask = (e) => {
        e.preventDefault();
        setTasksWithSave([...tasks, { ...task, status: 'To do' }]);
        setEdit(false);
        setModal(false);
        setTask({ title: '', descr: '' });
    };

    // Сохраняет данные в localStorage
    const setTasksWithSave = (tasks) => {
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Добавляет задачу
    const addNewTask = (e) => {
        e.preventDefault();
        setTasksWithSave([
            ...tasks,
            { ...task, id: Date.now(), status: 'To do' },
        ]);
        setTask({ title: '', descr: '' });
        setModal(false);
    };

    // Удаляет задачу
    const deleteTask = (task) => {
        setTasksWithSave(tasks.filter((t) => t.id !== task.id));
        setTask({ title: '', descr: '' });
    };

    // Выбирает id текущей задачи
    const handleSelectTask = (taskId, task) => {
        setCurrentTask(taskId);
    };

    // Обновляет данные в localStorage
    function newTasks() {
        let storage = window.localStorage;
        let currentValues = JSON.parse(storage.getItem('tasks'));
        let uniqueTasks = [];
        let originDubl = {};
        let modifyDubl = {};

        for (let i = 0; i < currentValues.length; i++) {
            let item = currentValues[i];
            let key = item['id'];
            if (!(key in originDubl)) {
                originDubl[key] = item;
                uniqueTasks.push(item);
            } else {
                modifyDubl[key] = item;
            }
        }

        for (let i = 0; i < uniqueTasks.length; i++) {
            let item = uniqueTasks[i];
            let key = item['id'];
            if (key in originDubl && key in modifyDubl) {
                delete originDubl[key];
            }
        }

        for (let key in modifyDubl) {
            originDubl[key] = modifyDubl[key];
        }

        let updatedTasks = Object.values(originDubl);

        setTasks(updatedTasks);
        storage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Отпускает задачу в колонку
    const dropHandler = (newStatus) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === currentTask) {
                return setTasksWithSave([
                    ...tasks,
                    { ...task, status: newStatus },
                ]);
            } else {
                return tasks;
            }
        });

        newTasks();
        setCurrentTask(null);
    };

    return (
        <React.Fragment>
            {/* Модальные окна с полями ввода и редактирования */}
            {edit ? (
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
                        />
                        <Input
                            value={task.descr}
                            onChange={(e) =>
                                setTask({ ...task, descr: e.target.value })
                            }
                            type={'text'}
                        />

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
                    {/* Колонки */}
                    {statuses.map((status) => (
                        <ColumnList
                            title={status}
                            tasks={getTasksByStatus(status)}
                            onSelectTask={handleSelectTask}
                            currentTask={currentTask}
                            dropHandler={dropHandler}
                            setModal={setModal}
                            editTask={editTask}
                            deleteTask={deleteTask}
                        />
                    ))}
                </div>
            </Board>
        </React.Fragment>
    );
}

export { App };
