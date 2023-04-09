import React from 'react';
import '../styles/modal.css';

const Modal = ({ children, visible, setVisible }) => {
    const addClasses = ['myModal'];
    if (visible) {
        addClasses.push('active');
    }

    return (
        <div className={addClasses.join(' ')} onClick={() => setVisible(false)}>
            <div
                className='myModalContent'
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export { Modal };
