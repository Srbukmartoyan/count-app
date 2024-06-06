const { Item } = require('../models');
const ItemService = {
  getAllItems: async () => {
    try {
      const items = await Item.findAll();
      return items;
    } catch (err) {
      throw new Error('Error fetching items from the database');
    }
  },

  refreshItems: async () => {
    try {
      await Item.update({ number: 0 }, { where: {} });
      const updatedItems = await Item.findAll();
      return updatedItems;
    } catch (err) {
      throw new Error('Error refreshing items in the database');
    }
  },

  restoreItems: async () => {
    try {
      const items = await Item.findAll();
      if (!items.length) {
        const defaultItems = Array.from({ length: 5 }, () => ({ number: 0 }));
        await Item.bulkCreate(defaultItems);
        const updatedItems = await Item.findAll();
        return updatedItems;
      }
      return items;
    } catch (err) {
      throw new Error('Error restoring items in the database');
    }
  },

  updateItem: async (itemId, action) => {
    try {
      const item = await Item.findByPk(itemId);
      if (!item) {
        throw new Error('Item not found');
      }
      if (action === 'increment') {
        item.number++;
      } else if (action === 'decrement') {
        if (!item.number) {
          throw new Error('Item number is already zero');
        }
        item.number--;
      } else {
        throw new Error('Invalid action');
      }

      await item.save();
      return item;
    } catch (err) {
      throw new Error(`Error ${action}ing item in the database: ${err.message}`);
    }
  },

  removeItem: async (itemId) => {
    try {
      const item = await Item.findByPk(itemId);
      if (!item) {
        throw new Error('Item not found');
      }
      await item.destroy();
      return { message: 'Item removed successfully' };
    } catch (err) {
      throw new Error('Error removing item from the database');
    }
  },
};

module.exports = ItemService;
