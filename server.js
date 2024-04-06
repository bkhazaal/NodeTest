const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongodb = require('mongodb');

app.get('/server1', (req, res) => {
    res.send('Server Test1')
})

app.get('/server2', (req, res) => {
    res.send('Server Test 2')
})

app.get('/server3', (req, res) => {
    res.send('Server Test 3')
})

app.get('/server4', (req, res) => {
    res.send('Server Test 4')
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})

const User = mongoose.model(
    "User1",
    new Schema({
        username: { type: String, required: true },
        password: { type: String, required: true }
    })
);