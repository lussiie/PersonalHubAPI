require('dotenv').config()
module.exports = {
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET,
  COOKIE_NAME: process.env.COOKIE_NAME
}