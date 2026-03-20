const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connect Successfully')
    }
    catch(error){
        console.log('Database connection error: ', error )
    }
}

module.exports = connectDB