import React from 'react';
import '../styles/board.css';
import { Header } from '../layout/Header';
import { Column } from './Column';

function Board() {
    return (
        <React.Fragment>
            <div className='background'>
                <Header />
                <Column />
            </div>
        </React.Fragment>
    );
}

export { Board };
