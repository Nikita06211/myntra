// routes/imageRoutes.js

const express = require('express');
const router = express.Router();
const Image = require('../Models/Image'); 

router.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new image
router.post('/', async (req, res) => {
  const { filename, data, contentType, size, url } = req.body;
  const newImage = new Image({ filename, data, contentType, size, url });
  try {
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
