// src/api/index.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',  // ✅ ชี้ไปที่ backend
  timeout: 5000,
})

// ✅ เพิ่ม Interceptor สำหรับใส่ Token อัตโนมัติ
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token') // หรือจาก Pinia / Vuex ก็ได้
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
