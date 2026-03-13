const item = require('../models/noteModel');

exports.createItem = async (data) => {
    return item.create(data);
}

exports.getItems = async (data) => {
    return item.find(data);
}

exports.getItemById = async (id) => {
    return item.findById(id);
}

exports.updateItem = async (id, data) => {
    return item.findByIdAndUpdate(id, data, { new: true });
}

exports.deleteItem = async (id) => {
    return item.findByIdAndDelete(id);
}