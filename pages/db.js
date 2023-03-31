// db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://tonyschneider3:5T3DMK5Nl2oeeoV7@cluster0.o4pbhsl.mongodb.net/music-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');
  } catch (error) {
    console.log('Error connecting to database:', error);
  }
};

export default connectToDatabase;
