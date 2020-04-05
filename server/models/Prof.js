const mongoose = require('mongoose');

const downloadItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const profSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    researchField: {
        type: String,
        required: true
    },
    bio: String,
    position: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    downloadList: [downloadItemSchema]
});

module.exports = mongoose.model('Prof', profSchema);