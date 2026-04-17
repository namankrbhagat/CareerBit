import multer from 'multer'

// Use memory storage so we don't depend on the 'public' dir existing on the server
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {fileSize: 5*1024*1024}, //5 mb limit
});
