const express = require('express');
const router = express.Router();
const requireAdmin = require('../middlewares/requireAdmin');
const {
    getAllMajors,
    getMajor,
    createMajor,
    deleteMajor
} = require('../controllers/major');

router.get('/:id', getMajor);
router.get('/', getAllMajors);
router.post('/create-major', requireAdmin, createMajor);
router.delete('/:id', requireAdmin, deleteMajor);

module.exports = router;
