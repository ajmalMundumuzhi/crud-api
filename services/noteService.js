const noteRepository = require('../repository/noteRepository');

exports.createItem = async (data) => {
    return noteRepository.createItem(data);
}

exports.getItems = async (data) => {
    return noteRepository.getItems(data);
}

exports.getItemById = async (id) => {
    return noteRepository.getItemById(id);
}

exports.updateItem = async (id, data) => {
    return noteRepository.updateItem(id, data);
}

exports.deleteItem = async (id) => {
    return noteRepository.deleteItem(id);
}