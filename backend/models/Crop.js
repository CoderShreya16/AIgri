const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema(
  {
    name:    { type: String, required: [true, 'Crop name is required'] },
    season:  { type: String, required: [true, 'Season is required'] },
    disease: { type: String, required: [true, 'Disease is required'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Crop', cropSchema);
