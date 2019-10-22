import Taro from "@tarojs/taro";
import interceptors from "./interceptor";
import {getToken, tokenHeader} from "./tokenService";

interceptors.forEach(i => Taro.addInterceptor(i));

export default {
  baseOptions(params, method) {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const option = {
      url: url,
      data: data,
      method: method,
      header: {
        "content-type": contentType,
        [tokenHeader]: getToken() || '',
      }
    };
    return Taro.request(option);
  },
  get(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "GET");
  },
  post: function(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  },
  put(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  },
  delete(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }
};
