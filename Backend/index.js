
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path=require('path')
require('dotenv').config();

const Image = require('./Models/Image'); // Ensure you have this path correct

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use( express.static('Images')); // Serve images statically

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'Images'); // Ensure this folder exists
  },
  filename: function(req, file, cb) {
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

app.get('/img/:id', async (req, res) => {
const {id} = req.params
try{

  const image=await Image.findById(id)
  if(!image) res.send({"msg":"img not found"})
    const imagePath=path.join(__dirname,"Images",image.filename)
  res.sendFile(imagePath)
}
 catch(error){
  res.send(error)
 }
});

app.get('/images',async(req,res)=>{
try{
  const images=await Image.find({});
  res.json(images);
}catch(error){
  console/log(error);
  res.status(500).send({error:'Unable to fetch images'});
}
});





// MongoDB Connection
const mongodburl = process.env.db_URL; // Ensure this is set in your .env file
mongoose.connect(mongodburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log("Server is listening on port ${port}");
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });