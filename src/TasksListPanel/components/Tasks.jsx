import React from 'react';

const Tasks = (props) => {
  const { tasks } = props;

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { tasks.map(task => (
          <li key={task.id} className='list-group-item d-flex'>
            <span className='mr-auto'>{task.text}</span>
            <button type='button' className='close' aria-label='Close' onClick={props.onRemove(task.id)}>
              <span>×</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
