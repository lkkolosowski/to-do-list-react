import {
  takeLatest,
  takeEvery,
  call,
  put,
  delay,
  select,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  saveHideDoneInLocalStorage,
  saveTasksInLocalStorage,
} from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  selectTasks,
  selectHideDone,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(950);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

function* saveHideDoneToLocaleStorageHandler() {
  const hideDone = yield select(selectHideDone);
  yield call(saveHideDoneInLocalStorage, hideDone);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
  yield takeEvery("*", saveHideDoneToLocaleStorageHandler);
}
