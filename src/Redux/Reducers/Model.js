import * as types from "../../Constants/modal";

var initialState = {
  showModel: false,
  component: null,
  title: ""
};

var reducers = (state = initialState, action) => {
  if (action.type === types.SHOW_MODAL) {
    return {
      ...state,
      showModel: true,
    };
  }
  if (action.type === types.HIDEN_MODAL) {
    return {
      ...state,
      showModel: false,
      title: "",
      component: null,
    };
  }
  if (action.type === types.CHANGE_MODAL_TITLE) {
    const { title } = action.payload;
    return {
      ...state,
      title: title,
    };
  }
  if (action.type === types.CHANGE_MODAL_CONTENT) {
    const { component } = action.payload;
    return {
      ...state,
      component: component,
    };
  }
  return state;
};
export default reducers;
