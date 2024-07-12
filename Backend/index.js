const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Image = require('./Models/Image');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('Images'));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
app.post('/single', upload.single('image'), async (req, res) => {
  try {
    const { path, filename, mimetype } = req.file;
    const image = new Image({
      path,
      filename,
      contentType: mimetype,
      size: 'M' // or any other logic for setting size
    });
    await image.save();
    res.status(201).send({ msg: 'Image uploaded', image });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to upload image' });
  }
});

app.get('/', (req, res) => {
  res.send('listening');
});

app.get('/product/:id', async (req, res) => { // Changed to '/product/:id'
  const { id } = req.params;
  try {
    const image = await Image.findById(id);
    if (!image) return res.status(404).send({ msg: 'Image not found' });
    res.json(image); // Send the image data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to fetch image' });
  }
});

app.get('/img/:id', async (req, res) => { // Keep this for image serving
  const { id } = req.params;
  try {
    const image = await Image.findById(id);
    if (!image) return res.status(404).send({ msg: 'Image not found' });
    const imagePath = path.join(__dirname, 'Images', image.filename);
    res.sendFile(imagePath);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to fetch image' });
  }
});

app.get('/images', async (req, res) => {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to fetch images' });
  }
});

// MongoDB Connection
const mongodburl = process.env.db_URL;
mongoose.connect(mongodburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
