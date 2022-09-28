import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Tasks from './Tasks.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import * as actions  from '../actions/index.js';
// { addTask, removeTask, updateNewTask, resetNewTask }
const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
    newTaskText: state.newTaskText,
    tasksUIState: state.tasksUIState,
  };
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
  removeTask: actions.removeTask,
  updateNewTask: actions.updateNewTask,
  resetNewTask: actions.resetNewTask,
  changeTaskTheme: actions.changeTaskTheme,
  addTaskTheme: actions.addTaskTheme,
  removeTaskTheme: actions.removeTaskTheme,
};

class App extends React.Component {  // export default 
  handleSubmit = (event) => {
    event.preventDefault();

    const { addTask, addTaskTheme, resetNewTask, newTaskText } = this.props;

    const id = _.uniqueId();
    addTask({ id, text: newTaskText });
    addTaskTheme({ id });
    resetNewTask();
  };

  handleRemove = (id) => (_event) => {
    const { removeTask, removeTaskTheme } = this.props;
    removeTask({ id });
    removeTaskTheme({ id });
  };

  handleUpdate = (event) => {
    const { updateNewTask } = this.props;
    // console.log(event.target.value);
    updateNewTask({ newText: event.target.value});
  };

  handleTheme = (id) => (_event) => {
    const { changeTaskTheme } = this.props;
    changeTaskTheme({ id });
  };

  render() {
    const { tasks, newTaskText, tasksUIState } = this.props;
    return (
      <div className='col-5'>
        <NewTaskForm newTaskText={newTaskText} onSubmit={this.handleSubmit} onUpdate={this.handleUpdate} />
        { tasks.length !== 0 ? <Tasks tasks={tasks} uiState={tasksUIState} onChangeTheme={this.handleTheme} onRemove={this.handleRemove} /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(App);
