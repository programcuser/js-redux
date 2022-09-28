import React from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import Filter from './Filter.jsx';
import * as actions  from '../actions/index.js';
// { addTask, removeTask, updateNewTask, resetNewTask }
const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
    // newTaskText: state.newTaskText,
  };
  return props;
};

const actionCreators = {
  addTask: actions.addTaskAsync,
  // removeTask: actions.removeTask,
  // updateNewTask: actions.updateNewTask,
  // resetNewTask: actions.resetNewTask,
  changeTaskState: actions.changeTaskState,
};

class App extends React.Component {  // export default 
  handleRemove = (id) => (_event) => {
    const { removeTask } = this.props;
    removeTask({ id });
  };

  handleCross = (id) => (_event) => {
    const { changeTaskState } = this.props;
    changeTaskState({ id });
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className='col-5'>
        <NewTaskForm initialValues={{ text: 'boo' }} addTask={this.props.addTask} />
        <Filter />
        { tasks.length !== 0 ? <Tasks onCross={this.handleCross} /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(App);
