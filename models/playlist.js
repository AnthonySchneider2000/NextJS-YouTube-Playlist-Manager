import mongoose from 'mongoose';
import SongModel from './song';

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'song', //the ref is the name of the model that we are referencing
  }],
});

module.exports = mongoose.models.playlist || mongoose.model('playlist', playlistSchema);

