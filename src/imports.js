const { Port } = require('./config');
const Router = require('./router/router')
const connect = require('./database/index')


module.exports = {Port, Router, connect}