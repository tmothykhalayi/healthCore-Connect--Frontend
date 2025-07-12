// authStore.ts
import type { AuthState, AuthStoreType } from '@/Types/interface';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const STORAGE_KEY = 'auth-storage';

const initialState: AuthState = {
  tokens: null,
  user: null,
  isAuthenticated: false,
};



const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      ...initialState,

      // Login and set both tokens and user data
      login: (tokens, userData) =>
        set({
          tokens,
          user: userData,
          isAuthenticated: true,
        }),

      // Clear all authentication data
      logout: () => {
        set(initialState);
        localStorage.removeItem(STORAGE_KEY); // Optional: explicitly remove from localStorage
      },

      // Update just the access token
      updateAccessToken: (newAccessToken) =>
        set((state) => ({
          tokens: state.tokens
            ? { ...state.tokens, accessToken: newAccessToken }
            : null,
        })),

      // Update partial user data
      updateUser: (updatedUser) =>
        set((state) => ({
          user: state.user
            ? {
              ...state.user,
              user: { ...state.user, ...updatedUser },
            }
            : null,
        })),

      // Mark user as verified
      verifyUser: () =>
        set((state) => ({
          user: state.user
            ? {
              ...state.user,
              user: { ...state.user, isVerified: true },
            }
            : null,
        })),

      // Reinitialize from localStorage
      reinitialize: () => {
        const storedState = localStorage.getItem(STORAGE_KEY);
        if (storedState) {
          try {
            const parsedState = JSON.parse(storedState);
            if (parsedState.state) {
              set({ ...parsedState.state });
            }
          } catch (error) {
            console.error('Failed to parse stored auth state', error);
          }
        }
      },
    }),
    {
      name: STORAGE_KEY, // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
      // Optional: you can whitelist or blacklist specific fields
      // partialize: (state) => ({ tokens: state.tokens, user: state.user }),
    }
  )
);

export default useAuthStore;
