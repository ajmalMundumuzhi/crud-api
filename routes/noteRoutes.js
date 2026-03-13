const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');    
const { createNoteValidator } = require('../validators/noteValidator');

router.route('/')
    .get(noteController.getItems)
    .post(createNoteValidator, noteController.createItem);

router.route('/:id')
    .get(noteController.getItemById)
    .put(noteController.updateItem)
    .delete(noteController.deleteItem);

module.exports = router;