import { createAction } from 'redux-actions';

export const addTask = createAction('ADD_TASK');
export const removeTask = createAction('DELETE_TASK');

// export const updateNewTask = createAction('UPDATE_TASK');
// export const resetNewTask = createAction('RESET_TASK');

export const changeTaskState = createAction('CHANGE_TASK_STATE');

export const setFilterState = createAction('SET_FILTER_STATE');

