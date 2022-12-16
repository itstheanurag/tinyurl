const express = require('express');
const {Port, Router} = require('./imports')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json());
app.use('/', Router);


app.listen(Port, () => {
    console.log(`Sever is running on port: ${Port}`)
})