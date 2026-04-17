const express = require('express');
const cookies = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/auth.routes');

app.use(express.json());
app.use(cookies());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Authentication API 2');
});

module.exports = app;