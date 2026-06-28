let crops = require('../data/crops');

// @desc    Get all crops
// @route   GET /api/crops
// @access  Public
const getCrops = (req, res) => {
  res.status(200).json(crops);
};

// @desc    Get single crop by ID
// @route   GET /api/crops/:id
// @access  Public
const getCropById = (req, res) => {
  const crop = crops.find(c => c.id === parseInt(req.params.id));
  if (crop) {
    res.status(200).json(crop);
  } else {
    res.status(404);
    throw new Error('Crop not found');
  }
};

// @desc    Create a new crop
// @route   POST /api/crops
// @access  Public
const createCrop = (req, res) => {
  const { name, season, disease } = req.body;
  if (!name || !season || !disease) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  const newCrop = {
    id: crops.length > 0 ? crops[crops.length - 1].id + 1 : 1,
    name,
    season,
    disease
  };
  crops.push(newCrop);
  res.status(201).json(newCrop);
};

// @desc    Update an existing crop
// @route   PUT /api/crops/:id
// @access  Public
const updateCrop = (req, res) => {
  const crop = crops.find(c => c.id === parseInt(req.params.id));
  
  if (!crop) {
    res.status(404);
    throw new Error('Crop not found');
  }

  const { name, season, disease } = req.body;
  
  crop.name = name || crop.name;
  crop.season = season || crop.season;
  crop.disease = disease || crop.disease;

  res.status(200).json(crop);
};

// @desc    Delete a crop
// @route   DELETE /api/crops/:id
// @access  Public
const deleteCrop = (req, res) => {
  const cropIndex = crops.findIndex(c => c.id === parseInt(req.params.id));

  if (cropIndex === -1) {
    res.status(404);
    throw new Error('Crop not found');
  }

  crops.splice(cropIndex, 1);
  res.status(204).send();
};

// @desc    Search crops by name
// @route   GET /api/crops/search?q=value
// @access  Public
const searchCrops = (req, res) => {
  const q = req.query.q;
  if (!q) {
    res.status(400);
    throw new Error('Search query is required');
  }
  const filteredCrops = crops.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
  res.status(200).json(filteredCrops);
};

module.exports = {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
  deleteCrop,
  searchCrops
};
