require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.log('MongoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = connectDB
