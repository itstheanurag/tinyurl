const mongoose = require("mongoose");
const {dburl} = require('../config/index')

mongoose.set("strictQuery", false);

const connect = mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>  {
    console.log("Database is up and running")
}).catch(err => console.log(err))

module.exports = {connect}

