const mongoose = require('mongoose')
const connection = mongoose.connect("mongodb+srv://ideotic34:ideotic34@cluster0.pe2mz5o.mongodb.net/?retryWrites=true&w=majority")
module.exports = connection