import { combineReducers } from 'redux';
import { faker } from '@faker-js/faker';

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
    case 'GENERATE_TASKS': {
      const { num } = action.payload;
      const newTasks = [];
      for (let i = 1; i <= num; i += 1) {
        newTasks.push({ id: num + 1 - i, text: faker.lorem.sentence() })
      }
      return newTasks;
    }
    case 'CLEAR_TASKS': {
      return [];
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
