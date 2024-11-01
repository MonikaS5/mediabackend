const mongoose = require('mongoose');

const MediaItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Draft', 'Published', 'Scheduled'],
        default: 'Draft'
    },
    imageUrl: {
        type: String
    }

})

module.exports = mongoose.model('MediaItem', MediaItemSchema);