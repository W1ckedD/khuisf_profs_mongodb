const Position = require('../models/Position');


exports.getAllPositions = async (req, res, next) => {
    try {
        const positions = await Position.find({});
        res.status(200).json({
            success: true,
            data: positions
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};

exports.getPosition = async (req, res, next) => {
    try {
        const { id } = req.params;
        const position = await Position.findById(id);
        res.status(200).json({
            success: true,
            data: position
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            error: 'no position found matching given info'
        });
    }
};

exports.createPosition = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newPosition = await Position.create({ name });
        res.status(200).json({
            success: true,
            data: newPosition
        });
    } catch (err) {
        console.log(err);
        res.status(422).json('server error');
    }
};

exports.deletePosition = async (req, res, next) => {
    try {
        const { id } = req.params;
        const position = await Position.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: position
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            error: 'no position found matching given info'
        });
    }
};
