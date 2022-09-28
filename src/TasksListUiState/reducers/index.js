import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
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

const addTaskHandler = (state, { payload: { id, text } }) => {
  // const newTask = { id: 1, text, state: 'active' };
  // if (state.allIds.length !== 0) {
  //   newTask.id = state.allIds[0] + 1;
  // }
  const newTask = { id, text, state: 'active' };
  // return [newTask, ...state];

  // addTaskThemeHandler({ id: newTask.id });
  // actions.addTaskTheme({ id: newTask.id });
  return {
    byId: { ...state.byId, [newTask.id]: newTask },
    allIds: [newTask.id, ...state.allIds]
  };
};

const removeTaskHandler = (state, { payload: { id } }) => {
  // return state.filter((task) => task.id !== id);
  // actions.removeTaskTheme({ id });
  return {
    byId: _.omit(state.byId, [id]),
    allIds: state.allIds.filter((currId) => currId !== id)
  };
};

const updateTaskHandler = (state, { payload: { newText } }) => {
  return newText;
};

const resetTaskHandler = (state, { payload }) => {
  return '';
};


const changeTaskThemeHandler = (state, { payload: { id } }) => {
  const newState = _.cloneDeep(state);

  if (newState[id].theme === 'light') {
    newState[id].theme = 'dark';
  } else if (newState[id].theme === 'dark') {
    newState[id].theme = 'light';
  }

  return newState;
};

const addTaskThemeHandler = (state, { payload: { id } }) => {
  // const newState = _.cloneDeep(state);
  // newState[id] = { theme: 'light' };
  // return newState;
  const newObject = { [id]: { theme: 'light'} };
  return { ...state, ...newObject };
};

const removeTaskThemeHandler = (state, { payload: { id } }) => {
  return _.omit(state, [id]);
};

const handlersTasks = {
  [actions.addTask]: addTaskHandler,
  [actions.removeTask]: removeTaskHandler,
};

const handlersNewTask = {
  [actions.updateNewTask]: updateTaskHandler,
  [actions.resetNewTask]: resetTaskHandler,
};

const handlersUiState = {
  [actions.addTaskTheme]: addTaskThemeHandler,
  [actions.changeTaskTheme]: changeTaskThemeHandler,
  [actions.removeTaskTheme]: removeTaskThemeHandler,
};

const tasksReducer = handleActions(handlersTasks, { byId: {}, allIds: [] });
const newTaskReducer = handleActions(handlersNewTask, '');
const tasksUIReducer = handleActions(handlersUiState, {});

const reducer = combineReducers({
  tasks: tasksReducer,
  newTaskText: newTaskReducer,
  tasksUIState: tasksUIReducer,
});

export default reducer;
