import mongoose from 'mongoose'

const connectDB = async () => {
  if (!mongoose.connection.readyState) {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string)
      console.log('Connected to mongodb')
    } catch (err) {
      if (err) throw err
    }
  }
}

export default connectDB
