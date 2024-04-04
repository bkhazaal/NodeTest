const express = require('express');
const { readFile } = require('fs');
const app = express();

app.get('/', (req, res) => {
    readFile('index.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('error');
        } else {
            console.log(html);
            res.send(html);
        }
    });
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});
