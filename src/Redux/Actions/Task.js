import * as taskConstants from "../../Constants/task";

export const fetchListTask = (param = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      param,
    },
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = (err) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      err,
    },
  };
};

export const filterTask = (key) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      key,
    },
  };
};

export const add_task = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};
export const add_task_success = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const add_task_err = (err) => {
  return {
    type: taskConstants.ADD_TASK_ERR,
    payload: {
      err,
    },
  };
};

export const edittingModel = (task) => {
  return {
    type: taskConstants.EDITTING_TASK,
    payload: {
      task,
    },
  };
};

export const update_add_task = (title, description, status = 0, id) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      title,
      description,
      status,
      id,
    },
  };
};

export const update_task_success = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const update_task_err = (err) => {
  return {
    type: taskConstants.UPDATE_TASK_ERR,
    payload: {
      err,
    },
  };
};

export const del_task = (task) => {
  return {
    type: taskConstants.DEL_TASK,
    payload: {
      task,
    },
  };
};
export const del_task_success = (id) => {
  return {
    type: taskConstants.DEL_TASK_SUCCESS,
    payload: {
      id,
    },
  };
};

export const del_task_err = (err) => {
  return {
    type: taskConstants.DEL_TASK_ERR,
    payload: {
      err,
    },
  };
};
