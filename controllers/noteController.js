const noteService = require('../services/noteService');

exports.createItem = async (req, res, next) => {
    try {
        const note = await noteService.createItem(req.body);
        res.status(201).json(note);
    }
    catch (err) {
        next(err); //Skip normal middleware Go to error-handling middleware
    }
}

exports.getItems = async (req, res, next) => {
    try {
        const notes = await noteService.getItems();
        res.status(200).json(notes);
    }
    catch(err) {
        next(err);
    }
}

exports.getItemById = async (req, res, next) => {
    try {
        const note = await noteService.getItemById(req.params.id);
        res.status(200).json(note);
    } 
    catch(err) {
        next(err);
    }
}

exports.updateItem = async (req, res, next) => {
    try {
        const note = await noteService.updateItem(req.params.id, req.body);
        res.status(201).json(note);
    }
    catch(err) {
        next(err);
    }
}

exports.deleteItem = async (req, res, next) => {
    try {
        await noteService.deleteItem(req.params.id);
        res.status(204).json("Note deleted successfully");
    }
    catch(err) {
        next(err);
    }
}