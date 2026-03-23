const pool = require('../config/database');

class Menu {
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT id, name, is_active, created_at, updated_at FROM menus WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  static async findByName(name) {
    const [rows] = await pool.execute(
      'SELECT id, name, is_active, created_at, updated_at FROM menus WHERE name = ? AND is_active = 1',
      [name]
    );
    return rows[0];
  }

  static async getAll() {
    const [rows] = await pool.execute(
      'SELECT id, name, is_active, created_at, updated_at FROM menus WHERE is_active = 1 ORDER BY name'
    );
    return rows;
  }

  static async create(menuData) {
    const { name } = menuData;
    const [result] = await pool.execute(
      'INSERT INTO menus (name) VALUES (?)',
      [name]
    );
    return result.insertId;
  }

  static async update(id, menuData) {
    const { name, is_active } = menuData;
    const updates = [];
    const values = [];

    if (name !== undefined) {
      updates.push('name = ?');
      values.push(name);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      values.push(is_active);
    }

    if (updates.length === 0) return;

    values.push(id);
    await pool.execute(
      `UPDATE menus SET ${updates.join(', ')} WHERE id = ?`,
      values
    );
  }

  static async delete(id) {
    await pool.execute('DELETE FROM menus WHERE id = ?', [id]);
  }

  static async getMenuWithItems(menuName, languageCode = 'en') {
    const [menus] = await pool.execute(
      'SELECT id, name FROM menus WHERE name = ? AND is_active = 1',
      [menuName]
    );

    if (menus.length === 0) return null;

    const menu = menus[0];

    // Get menu items with translations
    const [items] = await pool.execute(`
      SELECT mi.id, mi.parent_id, mi.order, mi.url, mit.label
      FROM menu_items mi
      LEFT JOIN menu_item_translations mit ON mi.id = mit.menu_item_id
      LEFT JOIN languages l ON mit.language_id = l.id
      WHERE mi.menu_id = ? AND mi.is_active = 1 AND l.code = ?
      ORDER BY mi.parent_id ASC, mi.order ASC
    `, [menu.id, languageCode]);

    // Build nested structure
    const menuItems = [];
    const itemMap = {};

    items.forEach(item => {
      itemMap[item.id] = { ...item, children: [] };
    });

    items.forEach(item => {
      if (item.parent_id) {
        if (itemMap[item.parent_id]) {
          itemMap[item.parent_id].children.push(itemMap[item.id]);
        }
      } else {
        menuItems.push(itemMap[item.id]);
      }
    });

    menu.items = menuItems;
    return menu;
  }
}

module.exports = Menu;