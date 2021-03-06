import axios from "axios";
import Qs from "querystring";
import {
  Message
} from 'view-design'

// 创建axios实例

const service = axios.create({
  // baseURL: 'http://218.246.5.8/Psms',
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    var _token = localStorage.getItem("token");
    if (_token) {
      config.headers["token"] = _token;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200/900是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code == 200 || res.code == 900 || !res.code) {
      return response.data;
    } else {
      var errorMsg = "抱歉，服务器出错啦~~~";
      if (res.code === 1003) {
        errorMsg = "长时间未登录，请重新登陆！";
        localStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userType');
      }
      location.reload();
      Message.error(errorMsg);
      return Promise.reject("error");
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message.error('服务器错误，请联系管理人员！');
    return Promise.reject("重新登录");
  }
);

export default service;
