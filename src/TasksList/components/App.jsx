import React from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, updateNewTask, resetNewTask } from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
    newTaskText: state.newTaskText,
  };
  return props;
};

const Tasks = (props) => {
  const { tasks } = props;

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { tasks.map(task => (
          <li key={task.id} className='list-group-item d-flex'>
            <span className='mr-auto'>{task.text}</span>
            <button type='button' className='close' onClick={props.onRemove(task.id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

class App extends React.Component {  // export default 
  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch, newTaskText } = this.props;
    dispatch(addTask({ text: newTaskText }))
    dispatch(resetNewTask())
  };

  handleRemove = (id) => (_event) => {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  };

  handleUpdate = (event) => {
    const { dispatch } = this.props;
    // console.log(event.target.value);
    dispatch(updateNewTask(event.target.value));
  };

  render() {
    const { tasks, newTaskText } = this.props;
    return (
      <div className='col-5'>
        <form action='' className='form-inline' onSubmit={this.handleSubmit}>
          <div className='form-group mx-sm-3'>
            <input type='text' required value={newTaskText} onChange={this.handleUpdate}/>
          </div>
          <button type='submit' className='btn btn-primary btn-sm'>Add</button>
        </form>
        { tasks.length !== 0 ? <Tasks tasks={tasks} onRemove={this.handleRemove} /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
