const express = require('express');
const router = express.Router();
const requireAdmin = require('../middlewares/requireAdmin');
const {
    getAllProfs,
    getProfById,
    createProf,
    deleteProf, 
} = require('../controllers/prof');
router.get('/:id', getProfById);
router.get('/', getAllProfs);
router.post('/create-prof', requireAdmin, createProf);
router.delete('/:id', requireAdmin, deleteProf);

module.exports = router;
