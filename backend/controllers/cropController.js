const Crop = require('../models/Crop');

// @desc    Get all crops
// @route   GET /api/crops
// @access  Public
const getCrops = async (req, res, next) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single crop by ID
// @route   GET /api/crops/:id
// @access  Public
const getCropById = async (req, res, next) => {
  try {
    const crop = await Crop.findById(req.params.id);
    if (!crop) {
      res.status(404);
      return next(new Error('Crop not found'));
    }
    res.status(200).json(crop);
  } catch (error) {
    // Invalid ObjectId format → treat as 404
    if (error.name === 'CastError') {
      res.status(404);
      return next(new Error('Crop not found'));
    }
    next(error);
  }
};

// @desc    Create a new crop
// @route   POST /api/crops
// @access  Public
const createCrop = async (req, res, next) => {
  try {
    const { name, season, disease } = req.body;
    if (!name || !season || !disease) {
      res.status(400);
      return next(new Error('Please include all fields'));
    }

    const crop = await Crop.create({ name, season, disease });
    res.status(201).json(crop);
  } catch (error) {
    next(error);
  }
};

// @desc    Update an existing crop
// @route   PUT /api/crops/:id
// @access  Public
const updateCrop = async (req, res, next) => {
  try {
    const crop = await Crop.findById(req.params.id);
    if (!crop) {
      res.status(404);
      return next(new Error('Crop not found'));
    }

    const { name, season, disease } = req.body;
    crop.name    = name    ?? crop.name;
    crop.season  = season  ?? crop.season;
    crop.disease = disease ?? crop.disease;

    const updated = await crop.save();
    res.status(200).json(updated);
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404);
      return next(new Error('Crop not found'));
    }
    next(error);
  }
};

// @desc    Delete a crop
// @route   DELETE /api/crops/:id
// @access  Public
const deleteCrop = async (req, res, next) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);
    if (!crop) {
      res.status(404);
      return next(new Error('Crop not found'));
    }
    res.status(204).send();
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404);
      return next(new Error('Crop not found'));
    }
    next(error);
  }
};

// @desc    Search crops by name
// @route   GET /api/crops/search?q=value
// @access  Public
const searchCrops = async (req, res, next) => {
  try {
    const q = req.query.q;
    if (!q) {
      res.status(400);
      return next(new Error('Search query is required'));
    }

    const crops = await Crop.find({
      name: { $regex: q, $options: 'i' },
    });
    res.status(200).json(crops);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
  deleteCrop,
  searchCrops,
};
