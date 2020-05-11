const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi There You !');
});

app.listen(8080, () => {
    console.log('Listening port 8080');
});