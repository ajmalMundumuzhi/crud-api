const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    }, 
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    }
}, { timestamps: true });

noteSchema.index({ title: 1}) // Normal Index
noteSchema.index({ createdAt: -1})
noteSchema.index({ author: 1, createdAt: -1 }); // Compound Index
noteSchema.index({email: 1}, {unique: true}) // unique index
noteSchema.index({ title: "text", description: "text" }) // Text index (Search)

module.exports = mongoose.model('Note', noteSchema);