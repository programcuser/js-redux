import React from 'react';
import { connect } from 'react-redux';
// import * as actions  from '../actions/index.js';
import * as selectors  from '../selectors/index.js';

const mapStateToProps = (state) => {
  let finalTasks = [];
  if (state.filter === 'all') {
    finalTasks = selectors.tasksSelector(state);
  } else if (state.filter === 'active') {
    finalTasks = selectors.activeTasksSelector(state);
  } else if (state.filter === 'finished') {
    finalTasks = selectors.finishedTasksSelector(state);
  }

  const props = {
    tasks: finalTasks,
  };
  return props;
};

const CrossingElement = (props) => {
  if (props.state === 'active') {
    return props.children;
  } else if (props.state === 'finished') {
    return <s>{props.children}</s>;
  }
  // return props.state === 'active' ? props.children : <s>{props.children}</s>;
};

const Tasks = (props) => {
  const { tasks } = props;
  // console.log(byId);

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { tasks.map(task => (
          <li key={task.id} className='list-group-item d-flex'>
            <CrossingElement state={task.state}><span className='mr-auto' onClick={props.onCross(task.id)}>{task.text}</span></CrossingElement>
            <button type='button' className='close' aria-label='Close' onClick={props.onRemove(task.id)}>
              <span>×</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default Tasks;
export default connect(mapStateToProps)(Tasks);
