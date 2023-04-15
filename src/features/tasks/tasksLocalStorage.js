const localStorageTasksKey = "tasks";
const localStorageHideDoneKey = "hideDone";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageTasksKey)) || [];

export const saveHideDoneInLocalStorage = (hideDone) =>
  localStorage.setItem(localStorageHideDoneKey, JSON.stringify(hideDone));

export const getHideDoneFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageHideDoneKey)) || false;
