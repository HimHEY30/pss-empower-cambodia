const pool = require('../config/database');

class Page {
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT id, slug, is_active, created_at, updated_at FROM pages WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  static async findBySlug(slug) {
    const [rows] = await pool.execute(
      'SELECT id, slug, is_active, created_at, updated_at FROM pages WHERE slug = ? AND is_active = 1',
      [slug]
    );
    return rows[0];
  }

  static async getAll() {
    const [rows] = await pool.execute(
      'SELECT id, slug, is_active, created_at, updated_at FROM pages WHERE is_active = 1 ORDER BY slug'
    );
    return rows;
  }

  static async create(pageData) {
    const { slug } = pageData;
    const [result] = await pool.execute(
      'INSERT INTO pages (slug) VALUES (?)',
      [slug]
    );
    return result.insertId;
  }

  static async update(id, pageData) {
    const { slug, is_active } = pageData;
    const updates = [];
    const values = [];

    if (slug !== undefined) {
      updates.push('slug = ?');
      values.push(slug);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      values.push(is_active);
    }

    if (updates.length === 0) return;

    values.push(id);
    await pool.execute(
      `UPDATE pages SET ${updates.join(', ')} WHERE id = ?`,
      values
    );
  }

  static async delete(id) {
    await pool.execute('DELETE FROM pages WHERE id = ?', [id]);
  }

  static async getWithTranslations(slug, languageCode = 'en') {
    const [pages] = await pool.execute(`
      SELECT p.id, p.slug, pt.title, pt.content, pt.meta_description, pt.meta_keywords
      FROM pages p
      LEFT JOIN page_translations pt ON p.id = pt.page_id
      LEFT JOIN languages l ON pt.language_id = l.id
      WHERE p.slug = ? AND p.is_active = 1 AND l.code = ?
    `, [slug, languageCode]);

    if (pages.length === 0) return null;

    const page = pages[0];

    // Get sections
    const [sections] = await pool.execute(`
      SELECT s.id, s.type, s.order, st.title, st.content, st.image_url, st.link_url
      FROM sections s
      LEFT JOIN section_translations st ON s.id = st.section_id
      LEFT JOIN languages l ON st.language_id = l.id
      WHERE s.page_id = ? AND s.is_active = 1 AND l.code = ?
      ORDER BY s.order ASC
    `, [page.id, languageCode]);

    page.sections = sections;
    return page;
  }
}

module.exports = Page;