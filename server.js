const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server Test')
})

app.get('/server2', (req, res) => {
    res.send('Server Test 2')
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})