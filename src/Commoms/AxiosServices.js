import axios from "axios";
class AxiosService {
  constructor() {
    let instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(err) {
    return Promise.reject(err);
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, data) {
    return this.instance.post(url, data);
  }
  put(url, data) {
    return this.instance.put(url, data);
  }
  delete(url) {
    return this.instance.delete(url);
  }
}
export default new AxiosService();
