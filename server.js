require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
}

app.get('/api/content', (req, res) => res.send('working'));

app.listen(5000, () =>
    console.log(`Server is running on http://localhost:5000`)
);
