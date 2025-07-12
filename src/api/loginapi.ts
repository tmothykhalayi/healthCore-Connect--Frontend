import {  useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import axios from 'axios'
import { API_BASE_URL } from './BaseUrl'
import type {UseMutationResult} from '@tanstack/react-query';
import type { GlobalDataType, LoginPayload, LoginResponse } from '@/Types/interface'
import { UserRole } from '@/Types/interface'
import useAuthStore from '../store/authStore'

const loginFn = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `${API_BASE_URL}/auth/signin`,
    {
      ...payload,
    },
  )
  console.log(response.data)
  return response.data
}

export const useLogin = (): UseMutationResult<
  LoginResponse,
  Error,
  LoginPayload
> => {
  return useMutation({
    mutationFn: loginFn,
    onSuccess: (data) => {
      console.log('Login response:', data)
      toast.success(`Welcome, ${data.user?.email || 'User'}!`)
      
      // Transform backend response to frontend format
      const authStore = useAuthStore.getState()
      authStore.login(
        {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        },
        {
          user_id: data.user?.id?.toString() || '',
          email: data.user?.email || '',
          role: data.user?.role as any || 'patient',
        }
      )
      
      // Also save to localStorage for backward compatibility
      localStorage.setItem('auth', JSON.stringify({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      }))
      localStorage.setItem('accesstoken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
    },
    onError: (error: any) => {
      toast.error(
        `Login failed: ${error?.response?.data?.message || error.message}`,
      )
    },
  })
}
