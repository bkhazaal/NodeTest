const express = require('express');
const { readFile } = require('fs');
const app = express();

app.get('/', (req, res) => {
    readFile('index.html', 'utf8', (err, html) => {
        if (err) {
            console.errror('Error reading file:', err);
            res.status(404).send('Internal Server Error');
            return;
        }
        res.send(html);
    })
})

app.listen(3000, () => {
    console.log('server running on port 3000');
});
