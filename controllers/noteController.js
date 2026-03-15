const noteService = require('../services/noteService');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/responseFormatter');
const redisClient = require('../config/redis');
const Logger = require('../utils/logger');

exports.createItem = asyncHandler(async(req, res) => {
        const note = await noteService.createItem(req.body);
        await redisClient.del("notes");
        successResponse(res, note, "Note created successfully", 201);
});

exports.getItems = asyncHandler(async (req, res) => {
        const cachedKey = "notes";
        const cachedNotes = await redisClient.get(cachedKey);
        if (cachedNotes) {
            Logger.info("Serving notes from Redis cache");
            return successResponse(res, JSON.parse(cachedNotes), "Notes retrieved successfully");
        }

        const notes = await noteService.getItems();
        await redisClient.set(cachedKey, JSON.stringify(notes), {
            EX: 60,
        })

        Logger.info("Serving notes from MongoDB");
        successResponse(res, notes, "Notes retrieved successfully");
});

exports.getItemById = asyncHandler(async (req, res) => {
    const cachedKey = `note:${req.params.id}`;
    const cachedNote = await redisClient.get(cachedKey);
    if (cachedNote) {
        Logger.info(`Serving note ${req.params.id} from Redis cache`);
        return successResponse(res, JSON.parse(cachedNote), "Note retrieved successfully");
    }

    const note = await noteService.getItemById(req.params.id);

    await redisClient.set(cachedKey, JSON.stringify(note), {
        EX: 600, 
    })
    successResponse(res, note, "Note retrieved successfully");
});

exports.updateItem = asyncHandler(async (req, res) => {
    const note = await noteService.updateItem(req.params.id, req.body);

    await redisClient.del("notes");
    await redisClient.del(`note:${req.params.id}`);

    successResponse(res, note, "Note updated successfully");
});
   

exports.deleteItem = asyncHandler(async (req, res) => {
    await noteService.deleteItem(req.params.id);

    await redisClient.del("notes");
    await redisClient.del(`note:${req.params.id}`);

    res.status(204).json("Note deleted successfully");
});