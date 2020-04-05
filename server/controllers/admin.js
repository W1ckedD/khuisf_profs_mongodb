const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
            username,
            password: hashedPassword
        });
        const token = jwt.sign({ id: admin._id }, "SECRET_KEY");
        res.status(200).json({
            success: true,
            data: admin,
            token
        });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ error: "This username is taken" });
        }
        console.log(err);
        res.status(422).json({ error: "server error" });
    }
};

exports.signin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            res.status(422).json({ error: "Invalid credentials" });
        }
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
            const token = jwt.sign({ id: admin._id }, "SECRET_KEY");
            res.status(200).json({
                success: true,
                data: admin,
                token
            })
        }
        res.status(422).json({error: 'Invalid credentials'});
    } catch (err) {
        console.log(err);
        res.status(422).json({error: 'server error'});
    }
};
