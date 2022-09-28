import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      // const { task } = action.payload;
      // const newTask = { id: 1, text: task.text };
      // if (state.tasks.length !== 0) {
      //   newTask.id = state.tasks[0].id + 1;
      // }
      // return { tasks: [newTask, ...state.tasks] };
      const { task } = action.payload;
      const newTask = { id: 1, text: task.text };
      if (state.length !== 0) {
        newTask.id = state[0].id + 1;
      }
      return [newTask, ...state];
    }
    case 'DELETE_TASK': {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    }
    default:
      return state;
  }
};

const newTaskReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TASK': {
      const { newText } = action.payload;
      return newText;
    }
    case 'RESET_TASK': {
      return '';
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  tasks: tasksReducer,
  newTaskText: newTaskReducer,
});

export default reducer;
