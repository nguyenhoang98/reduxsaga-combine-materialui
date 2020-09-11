import AxiosService from "../Commoms/AxiosServices";
import { API_ENDPOINT } from "../Constants/index";
import qs from "query-string";
const url = "/Task";

export const getList = (param = {}) => {
  let queryParam = "";
  if (Object.keys(param).length > 0) {
    queryParam = `?${qs.stringify(param)}`;
    console.log(queryParam);
  }
  return AxiosService.get(`${API_ENDPOINT}${url}${queryParam}`);
};

export const postList = (data) => {
  return AxiosService.post(`${API_ENDPOINT}${url}`, data);
};

export const putList = (id, data) => {
  return AxiosService.put(`${API_ENDPOINT}${url}/${id}`, data);
};
export const delList = (id) => {
  return AxiosService.delete(`${API_ENDPOINT}${url}/${id}`);
};
