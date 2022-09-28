import { createAction } from 'redux-actions';

// export const addTask = (task) => ({ type: 'ADD_TASK', payload: { task: { text: task.text } } });
// export const removeTask = (id) => ({ type: 'DELETE_TASK', payload: { id } });

// export const updateNewTask = (newText) => ({ type: 'UPDATE_TASK', payload: { newText } });
// export const resetNewTask = () => ({ type: 'RESET_TASK', payload: {} });

export const addTask = createAction('ADD_TASK');
export const removeTask = createAction('DELETE_TASK');

export const updateNewTask = createAction('UPDATE_TASK');
export const resetNewTask = createAction('RESET_TASK');

export const changeTaskState = createAction('CHANGE_TASK_STATE');

export const setFilterState = createAction('SET_FILTER_STATE');

