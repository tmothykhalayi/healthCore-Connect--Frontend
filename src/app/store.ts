import { Store } from '@tanstack/store'
import type { GlobalDataType } from '@/Types/interface'
import { UserRole } from '@/Types/interface'

// Initial auth state
const initialStorage: GlobalDataType = {
  isVerified: false,
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  user: {
    email: '',
    id: '',
    role: UserRole.PATIENT, // Default role
  },
}

// Store instance
export const authStore = new Store<GlobalDataType>(initialStorage)

// Utility to get auth data from localStorage
export const localStorageJson = (): GlobalDataType | null => {
  const localData = localStorage.getItem('auth')
  if (localData) return JSON.parse(localData)
  return null
}

// Auth actions
export const authActions = {
  // Save user and persist to localStorage
  saveUser: (data: GlobalDataType) => {
    const updatedState: GlobalDataType = {
      isVerified: true,
      tokens: data.tokens,
      user: data.user,
    }
    authStore.setState(updatedState)
    localStorage.setItem('auth', JSON.stringify(updatedState))
  },

  // Clear user and tokens
  deleteUser: () => {
    authStore.setState(initialStorage)
    localStorage.removeItem('auth')
  },

  // Load auth data from localStorage into store on app start
  initializeUser: () => {
    const userData = localStorage.getItem('auth')
    if (!userData) return
    const jsonData: GlobalDataType = JSON.parse(userData)
    authStore.setState(jsonData)
  },

  // Update only the access token
  saveAccessToken: (token: string) => {
    const updatedState: GlobalDataType = {
      ...authStore.state,
      tokens: {
        ...authStore.state.tokens,
        accessToken: token,
      },
    }
    authStore.setState(updatedState)
    localStorage.setItem('auth', JSON.stringify(updatedState))
  },
}
