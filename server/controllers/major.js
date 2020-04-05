const Major = require('../models/Major');

exports.getAllMajors = async (req, res, next) => {
    try {
        const majors = await Major.find({});
        res.status(200).json({
            success: true,
            data: majors
        });
    } catch (err) {
        res.status(422).json({ error: 'server error' });
    }
};

exports.getMajor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const major = await Major.findById(id);
        res.status(200).json({
            success: true,
            data: major
        });
    } catch (err) {
        res.status(404).json({ error: 'no major found matching given info' });
    }
};

exports.createMajor = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newMajor = await Major.create({ name });
        res.status(200).json({
            success: true,
            data: newMajor
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: 'server error' });
    }
};

exports.deleteMajor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const major = await Major.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: major
        });
    } catch (err) {
        res.status(404).json({ error: 'no major found matching given info' });
    }
};
