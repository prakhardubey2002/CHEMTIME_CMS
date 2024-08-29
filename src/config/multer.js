const multer = require('multer');
const path = require('path');

// Configure storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination directory for uploads
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // File naming convention
  }
});

// Create multer instance with the storage configuration
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Set file size limit (50MB)
});

module.exports = upload;
