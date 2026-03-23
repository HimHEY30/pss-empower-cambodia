import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<'en' | 'kh'>('en');

  const isEnglish = computed(() => currentLanguage.value === 'en');
  const isKhmer = computed(() => currentLanguage.value === 'kh');

  const setLanguage = (lang: 'en' | 'kh') => {
    currentLanguage.value = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(currentLanguage.value === 'en' ? 'kh' : 'en');
  };

  const initializeLanguage = () => {
    const saved = localStorage.getItem('language') as 'en' | 'kh';
    if (saved && (saved === 'en' || saved === 'kh')) {
      setLanguage(saved);
    }
  };

  return {
    currentLanguage,
    isEnglish,
    isKhmer,
    setLanguage,
    toggleLanguage,
    initializeLanguage,
  };
});