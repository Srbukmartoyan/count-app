const express = require("express");
const ItemController = require('../controller/ItemController.js');

const router = express.Router();

router.get('/items', ItemController.getAllItems);
router.put('/refresh', ItemController.refreshItems);
router.get('/restore', ItemController.restoreItems);
router.put('/items/:action/:id', ItemController.updateItem);

router.delete('/remove/:id', ItemController.removeItem);

module.exports = router;