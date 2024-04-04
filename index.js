const express = require('express');
const app = express();
const path = require('path')

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.send('hello universe')
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});
