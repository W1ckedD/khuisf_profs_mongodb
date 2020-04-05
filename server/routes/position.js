const express = require('express');
const router = express.Router();
const requireAdmin = require('../middlewares/requireAdmin');
const {
    getAllPositions,
    getPosition,
    createPosition,
    deletePosition
} = require('../controllers/position');

router.get('/:id', getPosition);
router.get('/', getAllPositions);
router.post('/create-position', requireAdmin, createPosition);
router.delete('/:id', requireAdmin, deletePosition);

module.exports = router;
