import { createSelector  } from 'reselect';

const getTasks = (state) => state.tasks.byId;

export const tasksSelector = createSelector(
  getTasks,
  (tasks) => Object.values(tasks),
);

export const activeTasksSelector = createSelector(
  tasksSelector,
  (tasks) => tasks.filter((task) => task.state === 'active'),
);

export const finishedTasksSelector = createSelector(
  tasksSelector,
  (tasks) => tasks.filter((task) => task.state === 'finished'),
);
