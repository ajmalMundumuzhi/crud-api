const noteService = require('../services/noteService');
const asyncHandler = require('../utils/asyncHandler');

exports.createItem = asyncHandler(async(req, res) => {
        const note = await noteService.createItem(req.body);
        res.status(201).json(note);
});

exports.getItems = asyncHandler(async (req, res) => {
        const notes = await noteService.getItems();
        res.status(200).json(notes);
});

exports.getItemById = asyncHandler(async (req, res) => {
    const note = await noteService.getItemById(req.params.id);
    res.status(200).json(note);
});

exports.updateItem = asyncHandler(async (req, res) => {
    const note = await noteService.updateItem(req.params.id, req.body);
    res.status(201).json(note);
});
   

exports.deleteItem = asyncHandler(async (req, res) => {
    await noteService.deleteItem(req.params.id);
    res.status(204).json("Note deleted successfully");
});