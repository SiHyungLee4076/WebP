const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to my Home !</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>Here is SHLee Home !</h1>');
});

app.listen(3000);