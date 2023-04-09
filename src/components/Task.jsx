import '../styles/task.css';

function Task({ title, descr, children, ...props }) {
    return (
        <div className='task'>
            <div className='task__content'>
                <h3>{title}</h3>
                <span>{descr}</span>
            </div>
            <div className='task__buttons'>
                {children}
                {/* <button>Edit</button>
                <button>Delete</button> */}
            </div>
        </div>
    );
}

export { Task };
