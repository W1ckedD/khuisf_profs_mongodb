const express = require('express');
const router = express.Router();
const requireAdmin = require('../middlewares/requireAdmin');
const {
    getAllFaculties,
    getFaculty,
    createFaculty,
    deleteFaculty
} = require('../controllers/faculty');

router.get('/:id', getFaculty);
router.get('/', getAllFaculties);
router.post('/create-faculty', requireAdmin, createFaculty);
router.delete('/:id', requireAdmin, deleteFaculty);

module.exports = router;
