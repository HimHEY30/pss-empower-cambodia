const Menu = require('../models/Menu');
const pool = require('../config/database');

class MenuService {
  static async getMenuByName(name, languageCode = 'en') {
    const menu = await Menu.getMenuWithItems(name, languageCode);
    if (!menu) {
      throw new Error('Menu not found');
    }
    return menu;
  }

  static async getAllMenus() {
    return await Menu.getAll();
  }

  static async createMenu(menuData) {
    const { name, items } = menuData;

    // Check if name already exists
    const existingMenu = await Menu.findByName(name);
    if (existingMenu) {
      throw new Error('Menu with this name already exists');
    }

    const menuId = await Menu.create({ name });

    // Create menu items if provided
    if (items && Array.isArray(items)) {
      for (const item of items) {
        await this.createMenuItem(menuId, item);
      }
    }

    return await Menu.findById(menuId);
  }

  static async updateMenu(id, menuData) {
    const { name, is_active } = menuData;

    if (name) {
      const existingMenu = await Menu.findByName(name);
      if (existingMenu && existingMenu.id !== parseInt(id)) {
        throw new Error('Menu with this name already exists');
      }
    }

    await Menu.update(id, { name, is_active });
    return await Menu.findById(id);
  }

  static async deleteMenu(id) {
    const menu = await Menu.findById(id);
    if (!menu) {
      throw new Error('Menu not found');
    }

    await Menu.delete(id);
  }

  static async createMenuItem(menuId, itemData) {
    const { parent_id, order, url, translations } = itemData;

    const [result] = await pool.execute(
      'INSERT INTO menu_items (menu_id, parent_id, `order`, url) VALUES (?, ?, ?, ?)',
      [menuId, parent_id || null, order || 0, url]
    );

    const itemId = result.insertId;

    // Create translations
    if (translations && Array.isArray(translations)) {
      for (const translation of translations) {
        await this.createMenuItemTranslation(itemId, translation);
      }
    }

    return itemId;
  }

  static async createMenuItemTranslation(itemId, translationData) {
    const { language_id, label } = translationData;

    await pool.execute(`
      INSERT INTO menu_item_translations (menu_item_id, language_id, label)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE label = VALUES(label)
    `, [itemId, language_id, label]);
  }

  static async updateMenuItem(id, itemData) {
    const { parent_id, order, url, is_active, translations } = itemData;

    const updates = [];
    const values = [];

    if (parent_id !== undefined) {
      updates.push('parent_id = ?');
      values.push(parent_id);
    }
    if (order !== undefined) {
      updates.push('`order` = ?');
      values.push(order);
    }
    if (url !== undefined) {
      updates.push('url = ?');
      values.push(url);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      values.push(is_active);
    }

    if (updates.length > 0) {
      values.push(id);
      await pool.execute(
        `UPDATE menu_items SET ${updates.join(', ')} WHERE id = ?`,
        values
      );
    }

    // Update translations
    if (translations && Array.isArray(translations)) {
      for (const translation of translations) {
        await this.updateMenuItemTranslation(id, translation.language_id, translation);
      }
    }
  }

  static async updateMenuItemTranslation(itemId, languageId, translationData) {
    const { label } = translationData;

    await pool.execute(`
      UPDATE menu_item_translations
      SET label = ?
      WHERE menu_item_id = ? AND language_id = ?
    `, [label, itemId, languageId]);
  }

  static async deleteMenuItem(id) {
    await pool.execute('DELETE FROM menu_items WHERE id = ?', [id]);
  }
}

module.exports = MenuService;