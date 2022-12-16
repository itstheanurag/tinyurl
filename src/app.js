const express = require('express');
const {Port, Router} = require('./imports')
const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use('/', Router);


app.listen(Port, () => {
    console.log(`Sever is running on port: ${Port}`)
})