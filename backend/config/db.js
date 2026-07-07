const dns = require('dns');
const mongoose = require('mongoose');

/**
 * Connects to MongoDB using the MONGO_URI environment variable.
 *
 * Why dns.setServers()?
 * The Windows system DNS (10.135.x.x / local router) cannot resolve the
 * SRV records that mongodb+srv:// requires. Node.js inherits this broken
 * resolver. Calling dns.setServers() before connecting overrides it with
 * Google Public DNS (8.8.8.8) for the lifetime of this process only —
 * no system network settings are changed.
 *
 * Exits with code 1 if the connection fails so the server never starts
 * in a broken state.
 */
const connectDB = async () => {
  // Override broken system DNS with Google's public resolver so the
  // mongodb+srv:// SRV lookup succeeds on networks with restrictive DNS.
  dns.setServers(['8.8.8.8', '8.8.4.4']);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

