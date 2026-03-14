const noteService = require('../services/noteService');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/responseFormatter');

exports.createItem = asyncHandler(async(req, res) => {
        const note = await noteService.createItem(req.body);
        successResponse(res, note, "Note created successfully", 201);
});

exports.getItems = asyncHandler(async (req, res) => {
        const notes = await noteService.getItems();
        successResponse(res, notes, "Notes retrieved successfully");
});

exports.getItemById = asyncHandler(async (req, res) => {
    const note = await noteService.getItemById(req.params.id);
    successResponse(res, note, "Note retrieved successfully");
});

exports.updateItem = asyncHandler(async (req, res) => {
    const note = await noteService.updateItem(req.params.id, req.body);
    successResponse(res, note, "Note updated successfully");
});
   

exports.deleteItem = asyncHandler(async (req, res) => {
    await noteService.deleteItem(req.params.id);
    res.status(204).json("Note deleted successfully");
});