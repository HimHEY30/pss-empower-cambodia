const Page = require('../models/Page');
const pool = require('../config/database');

class PageService {
  static async getPageBySlug(slug, languageCode = 'en') {
    const page = await Page.getWithTranslations(slug, languageCode);
    if (!page) {
      throw new Error('Page not found');
    }
    return page;
  }

  static async getAllPages() {
    return await Page.getAll();
  }

  static async createPage(pageData) {
    const { slug, translations } = pageData;

    // Check if slug already exists
    const existingPage = await Page.findBySlug(slug);
    if (existingPage) {
      throw new Error('Page with this slug already exists');
    }

    const pageId = await Page.create({ slug });

    // Create translations if provided
    if (translations && Array.isArray(translations)) {
      for (const translation of translations) {
        await this.createPageTranslation(pageId, translation);
      }
    }

    return await Page.findById(pageId);
  }

  static async updatePage(id, pageData) {
    const { slug, is_active, translations } = pageData;

    if (slug) {
      const existingPage = await Page.findBySlug(slug);
      if (existingPage && existingPage.id !== parseInt(id)) {
        throw new Error('Page with this slug already exists');
      }
    }

    await Page.update(id, { slug, is_active });

    // Update translations if provided
    if (translations && Array.isArray(translations)) {
      for (const translation of translations) {
        await this.updatePageTranslation(id, translation.language_id, translation);
      }
    }

    return await Page.findById(id);
  }

  static async deletePage(id) {
    const page = await Page.findById(id);
    if (!page) {
      throw new Error('Page not found');
    }

    await Page.delete(id);
  }

  static async createPageTranslation(pageId, translationData) {
    const { language_id, title, content, meta_description, meta_keywords } = translationData;

    await pool.execute(`
      INSERT INTO page_translations (page_id, language_id, title, content, meta_description, meta_keywords)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        title = VALUES(title),
        content = VALUES(content),
        meta_description = VALUES(meta_description),
        meta_keywords = VALUES(meta_keywords)
    `, [pageId, language_id, title, content, meta_description, meta_keywords]);
  }

  static async updatePageTranslation(pageId, languageId, translationData) {
    const { title, content, meta_description, meta_keywords } = translationData;

    await pool.execute(`
      UPDATE page_translations
      SET title = ?, content = ?, meta_description = ?, meta_keywords = ?
      WHERE page_id = ? AND language_id = ?
    `, [title, content, meta_description, meta_keywords, pageId, languageId]);
  }
}

module.exports = PageService;