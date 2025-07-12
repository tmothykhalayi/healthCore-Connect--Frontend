// authHelpers.ts

import useAuthStore from '@/store/authStore'
import { Role, type Tokens, type UserAuthType } from '@/Types/interface'

// === READ HELPERS ===

// export const getAuthUser = (): UserAuthType | undefined => useAuthStore.getState().user;

export const getAuthTokens = (): Tokens | null => useAuthStore.getState().tokens

export const getAccessToken = (): string | null =>
  useAuthStore.getState().tokens?.accessToken || null

export const getRefreshToken = (): string | null =>
  useAuthStore.getState().tokens?.refreshToken || null

export const getUserId = (): string | null =>
  useAuthStore.getState().user?.user_id || null

export const getUserEmail = (): string | null =>
  useAuthStore.getState().user?.email || null

export const getUserRole = (): Role | null =>
  useAuthStore.getState().user?.role || null

export const isUserVerified = (): string | null =>
  useAuthStore.getState().user?.email ?? null

export const isAuthenticated = (): boolean =>
  useAuthStore.getState().isAuthenticated

// === ACTION HELPERS ===

export const loginUser = (tokens: Tokens, userData: UserAuthType): void =>
  useAuthStore.getState().login(tokens, userData)

export const logoutUser = (): void => useAuthStore.getState().logout()

export const updateAccessToken = (accessToken: string): void =>
  useAuthStore.getState().updateAccessToken(accessToken)

export const updateUserData = (partialUser: Partial<UserAuthType>): void =>
  useAuthStore.getState().updateUser(partialUser)

export const verifyCurrentUser = (): void =>
  useAuthStore.getState().verifyUser()

// === CAMEL CASE HELPERS ===

// export const getAuthUserHelper = () => getAuthUser();
export const getAuthTokensHelper = () => getAuthTokens()
export const getAccessTokenHelper = () => getAccessToken()
export const getRefreshTokenHelper = () => getRefreshToken()
export const getUserIdHelper = () => getUserId()
export const getUserEmailHelper = () => getUserEmail()
export const getUserRoleHelper = () => getUserRole() || Role.patient
export const isUserVerifiedHelper = () => isUserVerified()
export const isAuthenticatedHelper = () => isAuthenticated()
export const loginUserHelper = (tokens: Tokens, userData: UserAuthType) =>
  loginUser(tokens, userData)
export const logoutUserHelper = () => logoutUser()
export const updateAccessTokenHelper = (accessToken: string) =>
  updateAccessToken(accessToken)
export const updateUserDataHelper = (partialUser: Partial<UserAuthType>) =>
  updateUserData(partialUser)
export const verifyCurrentUserHelper = () => verifyCurrentUser()
