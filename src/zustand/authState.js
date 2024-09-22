import { create } from 'zustand';

export const useAuthState = create(set => ({
  user: null,
  isAuthenticated: false,
  setUser: (userData) => set({
    user: userData,
    isAuthenticated: true,
  }),
}));