import axios from 'axios'
import { getToken, delToken } from '@/utils/storage'
import router from '@/router/index'
import { Toast } from 'vant'
const instance = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})
// 自定义配置（请求和响应拦截器）
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发生请求之前做什么
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  return response.data
}, function (error) {
  if (error.response) {
    if (error.response.status === 401) {
      delToken()
      // 拦截到登录
      router.push('/login')
    } else {
      Toast(error.response.data.message)
    }
  }

  return Promise.reject(error)
})

// 导出实例
export default instance
