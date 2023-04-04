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
  youtubeLink: String,
});

module.exports = mongoose.models.song || mongoose.model('song', songSchema);

