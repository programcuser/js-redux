import { createAction } from 'redux-actions';

export const addTask = createAction('ADD_TASK');
export const removeTask = createAction('DELETE_TASK');

// export const updateNewTask = createAction('UPDATE_TASK');
// export const resetNewTask = createAction('RESET_TASK');

export const changeTaskState = createAction('CHANGE_TASK_STATE');

export const setFilterState = createAction('SET_FILTER_STATE');

export const addTaskRequest  = createAction('TASK_ADD_REQUEST');
export const addTaskSuccess  = createAction('TASK_ADD_SUCCESS');
export const addTaskFailure  = createAction('TASK_ADD_FAILURE');

export const removeTaskRequest  = createAction('TASK_REMOVE_REQUEST');
export const removeTaskSuccess  = createAction('TASK_REMOVE_SUCCESS');
export const removeTaskFailure  = createAction('TASK_REMOVE_FAILURE');


// function sleep(milliseconds) {
// 	let t = (new Date()).getTime();
// 	let i = 0;
// 	while (((new Date()).getTime() - t) < milliseconds) {
// 		i+=1;
// 	}
// }


export const addTaskAsync = (values) => async (dispatch) => {
  dispatch(addTaskRequest());
  // setTimeout(() => dispatch(addTaskRequest()), 4000);
  try {
    // sleep(4000);
    // const response = await axios.post(routes.taskUrl(id), { text: values.text });;
    dispatch(addTask({ text: values.text }));  //{ task: response.data }
    dispatch(addTaskSuccess());
    // setTimeout(() => dispatch(addTask({ text: values.text })), 4000);
    // setTimeout(() => dispatch(addTaskSuccess()), 4000);
  } catch (e) {
    console.log(e);
    dispatch(addTaskFailure());
  }
};

export const removeTaskAsync = (id) => async (dispatch) => {
  dispatch(removeTaskRequest());
  try {
    // const response = await axios.delete(routes.taskUrl(id), { text: values.text });;
    dispatch(removeTask({ id }));  //{ task: response.data }
    dispatch(removeTaskSuccess({ id }));
  } catch (e) {
    console.log(e);
    dispatch(removeTaskFailure());
  }
};
