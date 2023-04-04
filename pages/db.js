// db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //log that we're connected with a timestamp
    console.log(`Connected to database at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.log('Error connecting to database:', error);
  }
};

export default connectToDatabase;
