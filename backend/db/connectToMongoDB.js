import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('DB connected successfully');
  } catch (error) {
    console.log('DB connection error: ', error.message);
  }
};

export default connectToMongoDB;