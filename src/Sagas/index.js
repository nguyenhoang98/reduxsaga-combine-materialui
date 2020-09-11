import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as taskType from "../Constants/task";
import { getList, postList, putList, delList } from "../Apis/Task";
import { STATUS_CODE } from "../Constants/index";
import {
  fetchListTask,
  fetchListTaskSuccess,
  fetchListTaskFailed,
  add_task_success,
  add_task_err,
  update_task_success,
  update_task_err,
  del_task_success,
  del_task_err,
} from "../Redux/Actions/Task";
import { showLoading, hideLoading } from "../Redux/Actions/ui";
/*
  b1 : dispatch FetchTask
  b2 : gọi Api
  b3 : Kiểm tra status
    - Thành Công ...
    - Thất Bại ...
  b4 : Thục Thi Công việc tiếp Theo
*/
function* watchFetchListTaskACtion() {
  while (true) {
    let action = yield take(taskType.FETCH_TASK);
    yield put(showLoading());
    // blocking
    const resp = yield call(getList, action.payload.param);
    // blocking cho dến khi nào call xong
    if (resp.status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(resp.data));
    } else {
      yield put(fetchListTaskFailed("404"));
    }
    yield delay(100);
    yield put(hideLoading());
  }
}
function* filterTaskSaga(data) {
  yield delay(500);
  let { key } = data.payload;
  yield put(
    fetchListTask({
      q: key,
    })
  );
}
function* addTaskSaga(data) {
  yield put(showLoading());
  const { title, description } = data.payload;
  const resp = yield call(postList, {
    title,
    description,
    status: 0,
  });
  if (resp.status === STATUS_CODE.CREATED) {
    yield put(add_task_success(resp.data));
  } else {
    yield put(add_task_err("404"));
  }
  yield delay(500);
  yield put(hideLoading());
}
function* updateTaskSaga(data) {
  yield put(showLoading());
  const { title, description, status, id } = data.payload;
  const resp = yield call(putList, id, {
    id: id,
    title: title,
    description: description,
    status: status,
  });
  if (resp.status === 200) {
    console.log("Hello");
    yield put(update_task_success(resp.data));
  } else {
    yield put(update_task_err("404"));
  }
  yield delay(200);
  yield put(hideLoading());
}
function* delTaskSaga(data) {
  const { task } = data.payload;
  const { id } = task;
  yield put(showLoading());
  const resp = yield call(delList, id);
  if (resp.status === 200) {
    yield put(del_task_success(id));
  } else {
    yield put(del_task_err("404"));
  }
  yield delay(500);
  yield put(hideLoading());
}
function* rootSaga() {
  yield fork(watchFetchListTaskACtion);
  yield takeLatest(taskType.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskType.ADD_TASK, addTaskSaga);
  yield takeLatest(taskType.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskType.DEL_TASK, delTaskSaga);
}
export default rootSaga;
