const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.models');


router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const userExists = await userModel.findOne({ username });
    if (userExists) {
        return res.status(400).send('User already exists');
    }

    const user = new userModel({ username, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token);
    return res.status(201).json({ message: 'User registered successfully', user, token });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
        return res.status(400).send('Invalid username');
    }
    
    if (user.password !== password) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token);
    return res.status(200).json({ message: 'Login successful', user, token });

});

router.get('/user', async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        return res.status(200).json({ message: 'User found', user });

    } catch (error) {
        return res.status(401).send('Invalid token');
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;