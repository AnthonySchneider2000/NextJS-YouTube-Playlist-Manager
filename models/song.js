import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: String,
  duration: Number,
});

const SongModel = mongoose.model('songCollection', songSchema);

export default SongModel;
