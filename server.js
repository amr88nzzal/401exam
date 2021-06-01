'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const apiData = require('./module/apiData')
const crud = require('./module/crud')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});
app.get('/get-characters',apiData)
app.get('/favorite',crud.readData)
app.post('/favorite',crud.addData)
app.delete('/favorite/:id',crud.deleteData)
app.put('/favorite',crud.updateData)


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
