const mongoose = require("mongoose")
const uri = `mongodb+srv://DB-1:DBPassword-1@cluster0.alln1jr.mongodb.net/`

const connect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Successfully connected to database.")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect