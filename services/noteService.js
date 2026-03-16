const noteRepository = require('../repository/noteRepository');
const { invalidateCache } = require('../utils/cache');

exports.createItem = async (data) => {
    const note = await noteRepository.createItem(data);
    await invalidateCache();
    return note;
}

exports.getItems = async ({ skip, limit, title, search, query }) => {
    return await noteRepository.getItems({
        skip, 
        limit,
        title,
        search,
        query,
    });
}

exports.getItemById = async (id) => {
    return noteRepository.getItemById(id);
}

exports.updateItem = async (id, data) => {
    const note = await noteRepository.updateItem(id, data);
    await invalidateCache();
    return note;
}

exports.deleteItem = async (id) => {
    await noteRepository.deleteItem(id);
    await invalidateCache();
}