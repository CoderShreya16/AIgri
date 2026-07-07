/**
 * seed.js — run once to populate MongoDB with sample crop data.
 * Usage: node seed.js
 * Safe to re-run: clears existing documents before inserting.
 */

const dns = require('dns');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crop = require('./models/Crop');

dotenv.config();
dns.setServers(['8.8.8.8', '8.8.4.4']); // bypass restrictive system DNS

const sampleCrops = [
  { name: 'Rice',  season: 'Kharif', disease: 'Blast'  },
  { name: 'Wheat', season: 'Rabi',   disease: 'Rust'   },
  { name: 'Maize', season: 'Kharif', disease: 'Blight' },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing documents so re-runs stay clean
    const deleted = await Crop.deleteMany({});
    console.log(`Cleared ${deleted.deletedCount} existing crop(s)`);

    // Insert sample data
    const inserted = await Crop.insertMany(sampleCrops);
    console.log(`\nInserted ${inserted.length} crops:`);
    inserted.forEach(c =>
      console.log(`  _id: ${c._id}  name: ${c.name}  season: ${c.season}  disease: ${c.disease}`)
    );

    // Verify round-trip
    const all = await Crop.find();
    console.log(`\nGET /api/crops → ${all.length} document(s) in DB ✓`);

    await mongoose.disconnect();
    console.log('\nDone. Database seeded successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err.message);
    process.exit(1);
  }
};

seed();
