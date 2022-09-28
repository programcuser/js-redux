import React from 'react';
import classNames from 'classnames';

const Tasks = (props) => {
  const { tasks: { byId, allIds }, uiState } = props;
  // console.log(uiState);

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { allIds.map(id => (
          <li key={id} className={classNames('list-group-item', 'd-flex', {
            'bg-light': uiState[id].theme === 'light',
            'text-dark': uiState[id].theme === 'light',
            'bg-dark': uiState[id].theme === 'dark',
            'text-light': uiState[id].theme === 'dark',
          })}>
            <span className='mr-auto'>
              <a href="#" className="text-reset" onClick={props.onChangeTheme(id)}>{byId[id.toString()].text}</a>
            </span>
            <button type='button' className='close' aria-label='Close' onClick={props.onRemove(id)}>
              <span>×</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
