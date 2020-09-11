import * as taskConstants from "../../Constants/task";
import {
  toastError,
  delSuccess,
  updateSuccess,
} from "../../Helpers/toastHelpers";
var initialState = {
  listTask: [],
  editting: null,
};
var reducers = (state = initialState, action) => {
  if (action.type === taskConstants.FETCH_TASK) {
    return {
      ...state,
      listTask: [],
    };
  }
  if (action.type === taskConstants.FETCH_TASK_SUCCESS) {
    return {
      ...state,
      listTask: action.payload.data,
    };
  }
  if (action.type === taskConstants.FETCH_TASK_FAILED) {
    const { err } = action.payload;
    toastError(err);
  }

  if (action.type === taskConstants.ADD_TASK) {
    return {
      ...state,
    };
  }
  if (action.type === taskConstants.ADD_TASK_SUCCESS) {
    const { data } = action.payload;
    return {
      ...state,
      listTask: state.listTask.concat(data),
    };
  }
  if (action.type === taskConstants.ADD_TASK_ERR) {
    const { err } = action.payload;
    toastError(err);
  }
  if (action.type === taskConstants.EDITTING_TASK) {
    const { task } = action.payload;
    return {
      ...state,
      editting: task,
    };
  }

  if (action.type === taskConstants.UPDATE_TASK_SUCCESS) {
    const { data } = action.payload;
    let index = state.listTask.findIndex((task) => {
      return task.id === data.id;
    });
    updateSuccess("Cập Nhật thành Công ");
    return {
      ...state,
      listTask: [
        ...state.listTask.slice(0, index),
        {
          ...data,
        },
        ...state.listTask.slice(index + 1),
      ],
    };
  }
  if (action.type === taskConstants.DEL_TASK_SUCCESS) {
    const { id } = action.payload;
    let index = state.listTask.findIndex((task) => {
      return task.id === id;
    });
    state.listTask.splice(index, 1);
    delSuccess("Xóa thành Công");
    return {
      ...state,
      listTask: [...state.listTask],
    };
  }
  if (action.type === taskConstants.DEL_TASK_ERR) {
  }
  return state;
};
export default reducers;
