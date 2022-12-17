require('dotenv').config();

module.exports = {
    Port: process.env.PORT || 3000,
    Base_Url: process.env.BASE_URL,
    dburl : process.env.DB_URL,
}