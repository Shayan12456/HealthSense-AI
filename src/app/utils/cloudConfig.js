const { v2: cloudinary } = require("cloudinary");

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true, // Ensures HTTPS URLs are generated
});

// Export the configured instance
module.exports = cloudinary;
