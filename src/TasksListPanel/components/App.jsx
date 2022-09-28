import React from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import Panel from './Panel.jsx';
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
  generateTasks: actions.generateTasks,
  clearTasks: actions.clearTasks,
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
    removeTask(id);
  };

  handleUpdate = (event) => {
    const { updateNewTask } = this.props;
    // console.log(event.target.value);
    updateNewTask(event.target.value);
  };

  generateTasks = (_event) => {
    const { generateTasks } = this.props;
    generateTasks();
  };

  clearTasks = (_event) => {
    const { clearTasks } = this.props;
    clearTasks();
  };

  render() {
    const { tasks, newTaskText } = this.props;
    return (
      <div className='col-5'>
        <NewTaskForm newTaskText={newTaskText} onSubmit={this.handleSubmit} onUpdate={this.handleUpdate} />
        <Panel onGenerate={this.generateTasks} onClear={this.clearTasks} />
        { tasks.length !== 0 ? <Tasks tasks={tasks} onRemove={this.handleRemove} /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(App);
