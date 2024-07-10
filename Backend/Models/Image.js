const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  data: {
    type: Buffer,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL'],  
    default: 'S',
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);

