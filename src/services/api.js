// API service for PSS Empower Cambodia
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'API request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Pages
  async getPage(slug, language = 'en') {
    return this.request(`/pages/${slug}?lang=${language}`);
  }

  // Menus
  async getMenu(name, language = 'en') {
    return this.request(`/menus/${name}?lang=${language}`);
  }

  // Auth
  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response;
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  async logout() {
    localStorage.removeItem('token');
  }

  // Admin endpoints
  async getAllPages() {
    return this.request('/pages');
  }

  async createPage(pageData) {
    return this.request('/pages', {
      method: 'POST',
      body: JSON.stringify(pageData),
    });
  }

  async updatePage(id, pageData) {
    return this.request(`/pages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(pageData),
    });
  }

  async deletePage(id) {
    return this.request(`/pages/${id}`, {
      method: 'DELETE',
    });
  }

  // Menu management
  async getAllMenus() {
    return this.request('/menus');
  }

  async createMenu(menuData) {
    return this.request('/menus', {
      method: 'POST',
      body: JSON.stringify(menuData),
    });
  }

  async updateMenu(id, menuData) {
    return this.request(`/menus/${id}`, {
      method: 'PUT',
      body: JSON.stringify(menuData),
    });
  }

  async createMenuItem(menuId, itemData) {
    return this.request(`/menus/${menuId}/items`, {
      method: 'POST',
      body: JSON.stringify(itemData),
    });
  }
}

export default new ApiService();