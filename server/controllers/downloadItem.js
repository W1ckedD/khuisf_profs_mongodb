const mongoose = require("mongoose");
const Prof = require("../models/Prof");

exports.createDownload = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const { name, url } = req.body;
        const prof = await Prof.findById(profId);
        const _id = mongoose.Types.ObjectId();
        const downloadItem = await prof.downloadList.push({
            _id,
            title: name,
            url
        });
        await prof.save();
        res.status(200).json({ success: true, data: downloadItem });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};

exports.getAllDownloads = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const prof = await Prof.findById(profId);
        const downLoadList = await prof.downloadList;
        res.status(200).json({
            success: true,
            data: downLoadList
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};

exports.deleteDownload = async (req, res, next) => {
    try {
        const { profId } = req.query;
        const { id } = req.params;
        const prof = await Prof.findById(profId);
        const downLoadItem = await prof.downloadList.id(id).remove();
        prof.save();
        res.status(200).json({
            success: true,
            data: downLoadItem
        });
    } catch (err) {
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};
