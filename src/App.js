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
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');

    const addNewTask = (e) => {
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <Modal visible={modal} setVisible={setModal}>
                <form>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type={'text'}
                        placeholder={'Title task'}
                    />
                    <Input
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                        type={'text'}
                        placeholder={'Description task'}
                    />

                    <Button onClick={addNewTask}>Add</Button>
                </form>
            </Modal>
            <Board>
                <Header />

                <div className='column__container'>
                    <Column title={'To Do'} color={'red'}>
                        <Task
                            title={'Заголовок задачи'}
                            descr={
                                'Описание задачи Lorem ipsum dolor site amet consectetur adipisicing elit. Cumque, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aperiam.'
                            }>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </Task>
                        <Button onClick={() => setModal(true)}>Add Task</Button>
                    </Column>
                    <Column title={'In Progress'} color={'yellow'} />
                    <Column title={'Done'} color={'green'} />
                </div>
            </Board>
        </React.Fragment>
    );
}

export { App };
