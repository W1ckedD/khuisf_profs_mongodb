const express = require('express');
const router = express.Router();
const requireAdmin = require('../middlewares/requireAdmin');
const { createDownload, getAllDownloads, deleteDownload } = require('../controllers/downloadItem');

router.get('/', getAllDownloads);
router.post('/create-download', requireAdmin, createDownload);
router.delete('/delete-download/:id', deleteDownload)


module.exports = router;