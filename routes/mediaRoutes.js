const express = require('express');
const router = express.Router();
const MediaItem = require('../models/Media');


const mediaRoutes = (upload) => {

    //get all media items

    router.get('/', async (req, res) => {
        try {
            const mediaItems = await MediaItem.find();
            res.json(mediaItems);

        } catch (error) {
            res.status(500).json({ message: 'Error fetching media items', error: error.message });
        }

    });

    // get a single media item by ID 

    router.get('/:id', async (req, res) => {
        try {
            const mediaItem = await MediaItem.findById(req.params.id);
            if (!mediaItem)
                return res.status(404).json({ message: 'Media item not found' });
            res.json(mediaItem);

        } catch (error) {
            res.status(500).json({ message: 'Error fetching media items', error: error.message });

        }

    });


}

module.exports = mediaRoutes;