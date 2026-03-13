const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const noteController = require('../controllers/noteController');    
const { createdNoteSchema } = require('../validators/noteValidator');

router.route('/')
    .get(noteController.getItems)
    .post(validate(createdNoteSchema), noteController.createItem);

router.route('/:id')
    .get(noteController.getItemById)
    .put(noteController.updateItem)
    .delete(noteController.deleteItem);

module.exports = router;