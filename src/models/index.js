const mongoose = require('mongoose')
require('dotenv').config()
try {
    console.log(process.env.dbUrl,process.env.dbName,'\n')
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
} catch (error) {
    console.log(error)
}

module.exports = mongoose