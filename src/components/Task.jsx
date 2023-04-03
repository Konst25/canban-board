import '../styles/task.css';

function Task() {
    return (
        <div className='tasks'>
            <div className='task'>
                <h2 className='red'>To Do</h2>
            </div>
            <div className='task'>
                <h2 className='yellow'>In Progress</h2>
            </div>
            <div className='task'>
                <h2 className='green'>Done</h2>
            </div>
        </div>
    );
}

export { Task };
