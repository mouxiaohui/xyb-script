const axios = require("axios");
const { getHeaders } = require("./headers");

require("dotenv").config(); // 加载 .env 文件

const request = axios.create({
  baseURL: "https://xcx.xybsyw.com/",
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    let headers = getHeaders(config.url, config.data);
    headers["Cookie"] = process.env.COOKIE;
    config.headers = headers;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data && data.code !== '200') {
      console.log(`Error code ${data.code}: ${data.msg}`);
      return Promise.reject(new Error(data.msg));
    }
    
    return data.data.data
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const get = (url, params) => {
  return request({
    url,
    method: "get",
    params
  });
};

const post = (url, data) => {
  return request({
    url,
    method: "post",
    data
  });
};

module.exports = { get, post };
