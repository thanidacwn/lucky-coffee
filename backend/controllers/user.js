const createUser = require('../models/createUser');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const createUserHandler = asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            res.status(400).json({ message: "Invalid Body" });
        }
        if (createUser.findOne({ username: req.body.username })) {
            res.status(400).json({ message: "User already exists" });
        }
        else if (createUser.validate(req.body)) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = await createUser.create({ username: req.body.username, password: hashedPassword });
            res.status(201).json(newUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = { createUserHandler }