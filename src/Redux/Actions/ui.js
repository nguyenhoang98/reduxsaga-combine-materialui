import * as uiType from "../../Constants/ui";
export const showLoading = () => {
  return {
    type: uiType.SHOW_LOADING,
  };
};
export const hideLoading = () => {
  return {
    type: uiType.HIDEN_LOADING,
  };
};

export const show_side_bar = () => {
  return {
    type: uiType.SHOW_SIDEBAR,
  };
};

export const hiden_side_bar = () => {
  return {
    type: uiType.HIDEN_SIDEBAR,
  };
};
