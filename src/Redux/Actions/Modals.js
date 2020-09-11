import * as modelTypes from "../../Constants/modal";
export const showModal = () => {
  return {
    type: modelTypes.SHOW_MODAL,
  };
};
export const hidenModal = () => {
  return {
    type: modelTypes.HIDEN_MODAL,
  };
};

export const changeModelContent = (component) => {
  return {
    type: modelTypes.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
export const changeModelTitle = (title) => {
  return {
    type: modelTypes.CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};
