import React from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import * as actions  from '../actions/index.js';
// { addTask, removeTask, updateNewTask, resetNewTask }
const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
    newTaskText: state.newTaskText,
  };
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
  removeTask: actions.removeTask,
  updateNewTask: actions.updateNewTask,
  resetNewTask: actions.resetNewTask,
};

class App extends React.Component {  // export default 
  handleSubmit = (event) => {
    event.preventDefault();

    const { addTask, resetNewTask, newTaskText } = this.props;
    addTask({ text: newTaskText });
    resetNewTask();
  };

  handleRemove = (id) => (_event) => {
    const { removeTask } = this.props;
    removeTask({ id });
  };

  handleUpdate = (event) => {
    const { updateNewTask } = this.props;
    // console.log(event.target.value);
    updateNewTask({ newText: event.target.value});
  };

  render() {
    const { tasks, newTaskText } = this.props;
    return (
      <div className='col-5'>
        <NewTaskForm newTaskText={newTaskText} onSubmit={this.handleSubmit} onUpdate={this.handleUpdate} />
        { tasks.length !== 0 ? <Tasks tasks={tasks} onRemove={this.handleRemove} /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(App);
