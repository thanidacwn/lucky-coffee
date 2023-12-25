const multer = require('multer');

// Create storage instance
const storage = multer.memoryStorage();

// Create upload instance using the storage
const upload = multer({ storage: storage });

module.exports = {
  storage,
  upload,
};
