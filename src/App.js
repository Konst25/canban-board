import React from 'react';
import { Board } from './components/Board';
import { Header } from './layout/Header';
import { Column } from './components/Column';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Board>
                <Header />
                <div className='column__container'>
                    <Column title={'To Do'} color={'red'} button={true} />
                    <Column title={'In Progress'} color={'yellow'} />
                    <Column title={'Done'} color={'green'} />
                </div>
            </Board>
        </React.Fragment>
    );
}

export { App };
