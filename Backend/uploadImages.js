const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const Image = require('./Models/Image');

dotenv.config();

const mongodburl = process.env.db_URL;

mongoose.connect(mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
  uploadImages();
}).catch((error) => {
  console.log('Database connection error:', error);
});

const uploadImages = async () => {
  const imagesFolder = path.join(__dirname,'Images');
  
  fs.readdir(imagesFolder, async (err, files) => {
    if (err) {
      console.log('Error reading images folder:', err);
      return;
    }

    for (const file of files) {
      const filePath = path.join(imagesFolder, file);
      const fileData = fs.readFileSync(filePath);
      const fileType = path.extname(file).slice(1);

      const newImage = new Image({
        filename: file,
        data: fileData,
        contentType: `image/${fileType}`,
        size: 'S'
    });

      try {
        await newImage.save();
        console.log(`Successfully uploaded ${file}`);
      } catch (saveError) {
        console.log(`Error uploading ${file}:`, saveError);
      }
    }

    console.log('Finished uploading images');
    mongoose.connection.close();
  });
};
