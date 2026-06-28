const express = require('express');
const router = express.Router();
const {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
  deleteCrop,
  searchCrops
} = require('../controllers/cropController');

// Important: Search route must come before /:id route so it doesn't get matched as an ID
router.get('/search', searchCrops);

router.route('/')
  .get(getCrops)
  .post(createCrop);

router.route('/:id')
  .get(getCropById)
  .put(updateCrop)
  .delete(deleteCrop);

module.exports = router;
