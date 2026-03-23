import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '@/services/api';
import { useLanguage } from './useLanguage';

// Hook for fetching pages
export const usePage = (slug: string) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['page', slug, language],
    queryFn: () => apiService.getPage(slug, language),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for fetching menus
export const useMenu = (name: string) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['menu', name, language],
    queryFn: () => apiService.getMenu(name, language),
    enabled: !!name,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for authentication
export const useAuth = () => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (credentials: { username: string; password: string }) =>
      apiService.login(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => apiService.logout(),
    onSuccess: () => {
      queryClient.clear();
      localStorage.removeItem('token');
    },
  });

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: () => apiService.getCurrentUser(),
    enabled: !!localStorage.getItem('token'),
    retry: false,
  });

  return {
    user: userQuery.data?.data,
    isAuthenticated: !!userQuery.data?.data,
    isAdmin: userQuery.data?.data?.role === 'admin',
    isEditor: userQuery.data?.data?.role === 'editor' || userQuery.data?.data?.role === 'admin',
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoading: userQuery.isLoading || loginMutation.isPending,
    error: userQuery.error || loginMutation.error,
  };
};

// Hook for admin page management
export const usePagesAdmin = () => {
  const queryClient = useQueryClient();

  const pagesQuery = useQuery({
    queryKey: ['admin', 'pages'],
    queryFn: () => apiService.getAllPages(),
  });

  const createPageMutation = useMutation({
    mutationFn: (pageData: any) => apiService.createPage(pageData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'pages'] });
      queryClient.invalidateQueries({ queryKey: ['page'] });
    },
  });

  const updatePageMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      apiService.updatePage(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'pages'] });
      queryClient.invalidateQueries({ queryKey: ['page'] });
    },
  });

  const deletePageMutation = useMutation({
    mutationFn: (id: string) => apiService.deletePage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'pages'] });
      queryClient.invalidateQueries({ queryKey: ['page'] });
    },
  });

  return {
    pages: pagesQuery.data?.data,
    isLoading: pagesQuery.isLoading,
    error: pagesQuery.error,
    createPage: createPageMutation.mutateAsync,
    updatePage: updatePageMutation.mutateAsync,
    deletePage: deletePageMutation.mutateAsync,
  };
};

// Hook for admin menu management
export const useMenusAdmin = () => {
  const queryClient = useQueryClient();

  const menusQuery = useQuery({
    queryKey: ['admin', 'menus'],
    queryFn: () => apiService.getAllMenus(),
  });

  const createMenuMutation = useMutation({
    mutationFn: (menuData: any) => apiService.createMenu(menuData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'menus'] });
      queryClient.invalidateQueries({ queryKey: ['menu'] });
    },
  });

  const updateMenuMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      apiService.updateMenu(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'menus'] });
      queryClient.invalidateQueries({ queryKey: ['menu'] });
    },
  });

  return {
    menus: menusQuery.data?.data,
    isLoading: menusQuery.isLoading,
    error: menusQuery.error,
    createMenu: createMenuMutation.mutateAsync,
    updateMenu: updateMenuMutation.mutateAsync,
  };
};