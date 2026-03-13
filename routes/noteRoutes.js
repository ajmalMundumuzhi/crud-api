const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');    

router.route('/')
    .get(noteController.getItems)
    .post(noteController.createItem);

router.route('/:id')
    .get(noteController.getItemById)
    .put(noteController.updateItem)
    .delete(noteController.deleteItem);

module.exports = router;