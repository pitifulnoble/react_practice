import axios, { AxiosError } from 'axios';
import storage from './storage';
import env from '@/config';
import type { Result } from '@/types/api';
import { message } from './AntdGlobal';
console.log('config', env);
// 创建实例
const instance = axios.create({
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true,
  headers: {
    icode: ''
  }
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    const token = storage.get('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    if (env.mock) {
      config.baseURL = env.mockApi;
    } else {
      config.baseURL = env.baseApi;
    }
    return {
      ...config
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data: Result = response.data;
    if (response.config.responseType === 'blob') return response;
    if (data.code === 500001) {
      message.error(data.msg);
      storage.remove('token');
      location.href = '/login?callback=' + encodeURIComponent(location.href);
    } else if (data.code != 0) {
      return Promise.reject(data);
    }
    return data.data;
  },
  error => {
    message.error(error.message);
    return Promise.reject(error.message);
  }
);

interface IConfig {
  showLoading?: boolean;
  showError?: boolean;
}

export default {
  get<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.get(url, { params, ...options });
  },
  post<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, params);
  }
};
