const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).json({ error: 'admin access required' });
    }
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(403).json({ error: 'admin access required' });
        }
        const { id } = payload;
        const admin = await Admin.findById(id);
        req.admin = admin;
        next();
    });
};
