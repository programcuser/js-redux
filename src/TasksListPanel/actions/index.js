export const addTask = (task) => ({ type: 'ADD_TASK', payload: { task: { text: task.text } } });
export const removeTask = (id) => ({ type: 'DELETE_TASK', payload: { id } });

export const updateNewTask = (newText) => ({ type: 'UPDATE_TASK', payload: { newText } });
export const resetNewTask = () => ({ type: 'RESET_TASK', payload: {} });

export const generateTasks = (num = 5) => ({ type: 'GENERATE_TASKS', payload: { num } });
export const clearTasks = () => ({ type: 'CLEAR_TASKS', payload: {} });
