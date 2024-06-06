const ItemService = require('../service/ItemService.js');
const { BadRequestError } = require('../middleware/errorHandler.js');

const ItemController = {
  getAllItems: async (req, res, next) => {
    try {
      const items = await ItemService.getAllItems();
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  },

  refreshItems: async (req, res, next) => {
    try {
      const updatedItems = await ItemService.refreshItems();
      res.status(200).json(updatedItems);
    } catch (err) {
      next(err);
    }
  },

  restoreItems: async (req, res, next) => {
    try {
      const items = await ItemService.restoreItems();
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  },

  updateItem: async (req, res, next) => {
    const { action, id } = req.params;
    try {
      const updatedItem = await ItemService.updateItem(id, action);
      res.status(200).json(updatedItem);
    } catch (err) {
      const badRequestErr = new BadRequestError('Bad request: ' + err.message);
      next(badRequestErr);
    }
  },  

  removeItem: async (req, res, next) => {
    const itemId = req.params.id;
    try {
      const result = await ItemService.removeItem(itemId);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = ItemController;
