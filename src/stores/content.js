import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiService from '@/services/api';
import { useLanguageStore } from './language';

export const useContentStore = defineStore('content', () => {
  const languageStore = useLanguageStore();

  // State
  const pages = ref(new Map());
  const menus = ref(new Map());
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const getPage = computed(() => (slug) => {
    return pages.value.get(`${slug}_${languageStore.currentLanguage}`);
  });

  const getMenu = computed(() => (name) => {
    return menus.value.get(`${name}_${languageStore.currentLanguage}`);
  });

  // Actions
  const fetchPage = async (slug) => {
    const cacheKey = `${slug}_${languageStore.currentLanguage}`;

    if (pages.value.has(cacheKey)) {
      return pages.value.get(cacheKey);
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await apiService.getPage(slug, languageStore.currentLanguage);
      const page = response.data;
      pages.value.set(cacheKey, page);
      return page;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const fetchMenu = async (name) => {
    const cacheKey = `${name}_${languageStore.currentLanguage}`;

    if (menus.value.has(cacheKey)) {
      return menus.value.get(cacheKey);
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await apiService.getMenu(name, languageStore.currentLanguage);
      const menu = response.data;
      menus.value.set(cacheKey, menu);
      return menu;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const clearCache = () => {
    pages.value.clear();
    menus.value.clear();
  };

  const refreshContent = async () => {
    clearCache();
    // Optionally refetch current page/menu if needed
  };

  return {
    // State
    pages,
    menus,
    loading,
    error,

    // Getters
    getPage,
    getMenu,

    // Actions
    fetchPage,
    fetchMenu,
    clearCache,
    refreshContent,
  };
});