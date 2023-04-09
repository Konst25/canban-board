import React, { useState } from 'react';
import { Board } from './components/Board';
import { Header } from './layout/Header';
import { Column } from './components/Column';
import './App.css';
import { Modal } from './components/Modal';
import { Button } from './layout/button/Button';

function App() {
    const [modal, setModal] = useState(false);

    return (
        <React.Fragment>
            <Modal visible={modal} setVisible={setModal}></Modal>
            <Board>
                <Header />

                <div className='column__container'>
                    <Column title={'To Do'} color={'red'}>
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
