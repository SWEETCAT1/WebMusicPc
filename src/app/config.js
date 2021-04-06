require('dotenv').config('../.env')
const process = require('process')
// const fs = require('fs')
// const path = require('path')

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env
