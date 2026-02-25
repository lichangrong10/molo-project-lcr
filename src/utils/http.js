//axios基础的封装
import axios from "axios";
import { useUserStore } from '@/stores/user'
import { loginAPI } from '@/apis/login'
import { useRouter } from "vue-router";

const httpInstance = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 500000,
});


//请求拦截器
httpInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const useStore = useUserStore()
  const token = useStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
httpInstance.interceptors.response.use(function (response) {
  const useStore = useUserStore()
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  ElMessage.error(error.response.data.message)

  //token错误处理
  if (error.response.status === 401) {
    useStore.clearUserInfo()
    const router = useRouter()
    router.push('/login')
  }
  return Promise.reject(error);

});

export default httpInstance

