import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiService from '@/services/api';

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null);
  const token = ref(localStorage.getItem('token') || null);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const isAuthenticated = computed(() => !!token.value && !!user.value);
  const isAdmin = computed(() => user.value?.role === 'admin');
  const isEditor = computed(() => user.value?.role === 'editor' || user.value?.role === 'admin');

  // Actions
  const login = async (credentials) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apiService.login(credentials);
      const { token: newToken, user: userData } = response.data;

      token.value = newToken;
      user.value = userData;

      localStorage.setItem('token', newToken);

      return response;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('token');
    apiService.logout();
  };

  const fetchCurrentUser = async () => {
    if (!token.value) return;

    loading.value = true;
    error.value = null;

    try {
      const response = await apiService.getCurrentUser();
      user.value = response.data;
    } catch (err) {
      // Token might be invalid
      logout();
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const initializeAuth = async () => {
    if (token.value) {
      try {
        await fetchCurrentUser();
      } catch (err) {
        // Silent fail - user will need to login again
        console.warn('Failed to restore authentication:', err.message);
      }
    }
  };

  return {
    // State
    user,
    token,
    loading,
    error,

    // Getters
    isAuthenticated,
    isAdmin,
    isEditor,

    // Actions
    login,
    logout,
    fetchCurrentUser,
    initializeAuth,
  };
});