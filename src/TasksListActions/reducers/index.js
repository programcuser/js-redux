import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

// const tasksReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TASK': {
//       const { task } = action.payload;
//       const newTask = { id: 1, text: task.text };
//       if (state.length !== 0) {
//         newTask.id = state[0].id + 1;
//       }
//       return [newTask, ...state];
//     }
//     case 'DELETE_TASK': {
//       const { id } = action.payload;
//       return state.filter((task) => task.id !== id);
//     }
//     default:
//       return state;
//   }
// };

// const newTaskReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'UPDATE_TASK': {
//       const { newText } = action.payload;
//       return newText;
//     }
//     case 'RESET_TASK': {
//       return '';
//     }
//     default:
//       return state;
//   }
// };

const addTaskHandler = (state, { payload: { text } }) => {
  const newTask = { id: 1, text };
  if (state.length !== 0) {
    newTask.id = state[0].id + 1;
  }
  return [newTask, ...state];
};

const removeTaskHandler = (state, { payload: { id } }) => {
  return state.filter((task) => task.id !== id);
};


const updateTaskHandler = (state, { payload: { newText } }) => {
  return newText;
};

const resetTaskHandler = (state, { payload }) => {
  return '';
};


const handlersTasks = {
  [actions.addTask]: addTaskHandler,
  [actions.removeTask]: removeTaskHandler,
};

const handlersNewTask = {
  [actions.updateNewTask]: updateTaskHandler,
  [actions.resetNewTask]: resetTaskHandler,
};


const tasksReducer = handleActions(handlersTasks, []);
const newTaskReducer = handleActions(handlersNewTask, '');

const reducer = combineReducers({
  tasks: tasksReducer,
  newTaskText: newTaskReducer,
});

export default reducer;
