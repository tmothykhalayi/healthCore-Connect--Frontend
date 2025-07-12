import axios from 'axios'
import { API_BASE_URL } from '../api/BaseUrl'

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL, // Use the same base URL as defined in BaseUrl.ts
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accesstoken') // Use the correct token key
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
