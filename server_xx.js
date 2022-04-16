//commonJS
//const express = require('express');

//ES6
import express from 'express'
const app = express();

import dotenv from "dotenv";
dotenv.config();

import connectDB_72 from './db/connect_72.js'

app.get('/', (req, res) => {
    res.send('welcome eric 207410472');
});

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB_72("mongodb://localhost:27017/demo_72").then(() => {
            console.log('Connecting to MongoDB')
        });
        app.listen(port, () => console.log(`Srever is running on port ${port}`));
    } catch (err) {
        console.log(err);
    }
}

start();