import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as actions from '../actions/index.js';

const addTaskHandler = (state, { payload: { text } }) => {
  // const newTask = { id: 1, text, state: 'active' };
  // if (state.allIds.length !== 0) {
  //   newTask.id = state.allIds[0] + 1;
  // }
  const newTask = { id: _.uniqueId(), text, state: 'active' };
  // return [newTask, ...state];
  return {
    byId: { ...state.byId, [newTask.id]: newTask },
    allIds: [newTask.id, ...state.allIds]
  };
};

const removeTaskHandler = (state, { payload: { id } }) => {
  // return state.filter((task) => task.id !== id);
  return {
    byId: _.omit(state.byId, [id]),
    allIds: state.allIds.filter((currId) => currId !== id)
  };
};

const changeTaskStateHandler = (state, { payload: { id } }) => {
  const changedById = _.cloneDeep(state.byId);
  const filteredAllIds = state.allIds.filter((currId) => currId !== id);

  const currTaskState = changedById[id].state;

  if (currTaskState === 'active') {
    changedById[id].state = 'finished';
    filteredAllIds.push(id);
  } else if (currTaskState === 'finished') {
    changedById[id].state = 'active';
    filteredAllIds.unshift(id);
  }

  return {
    byId: changedById,
    allIds: filteredAllIds,
  };
};

const updateTaskHandler = (state, { payload: { newText } }) => {
  return newText;
};

const resetTaskHandler = (state, { payload }) => {
  return '';
};


const setFilterStateHandler = (state, { payload: { value } }) => {
  return value;
};


const handlersTasks = {
  [actions.addTask]: addTaskHandler,
  [actions.removeTask]: removeTaskHandler,
  [actions.changeTaskState]: changeTaskStateHandler,
};

const handlersNewTask = {
  [actions.updateNewTask]: updateTaskHandler,
  [actions.resetNewTask]: resetTaskHandler,
};

const handlersFilter = {
  [actions.setFilterState]: setFilterStateHandler,
}


const tasksReducer = handleActions(handlersTasks, { byId: {}, allIds: [] });
const newTaskReducer = handleActions(handlersNewTask, '');
const filterReducer = handleActions(handlersFilter, 'all');

const reducer = combineReducers({
  tasks: tasksReducer,
  newTaskText: newTaskReducer,
  filter: filterReducer,
});

export default reducer;
