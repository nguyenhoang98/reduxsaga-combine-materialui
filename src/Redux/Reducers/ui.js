import * as uiType from "../../Constants/ui";
var initialState = {
  showLoading: false,
  showSideBar: false,
};

var Reducers = (state = initialState, action) => {
  if (action.type === uiType.SHOW_LOADING) {
    return {
      ...state,
      showLoading: true,
    };
  }
  if (action.type === uiType.HIDEN_LOADING) {
    return {
      ...state,
      showLoading: false,
    };
  }
  if (action.type === uiType.SHOW_SIDEBAR) {
    return {
      ...state,
      showSideBar: true,
    };
  }
  if (action.type === uiType.HIDEN_SIDEBAR) {
    return {
      ...state,
      showSideBar: false,
    };
  }
  return state;
};
export default Reducers;
