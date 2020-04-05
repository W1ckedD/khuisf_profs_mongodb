const express = require('express');
const router = express.Router();
const { createAdmin, signin } = require('../controllers/admin');

router.post('/create-admin', createAdmin);
router.post('/signin', signin);

module.exports = router;
