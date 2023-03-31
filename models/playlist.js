import mongoose from 'mongoose';
import SongModel from './song';

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SongModel', //the ref is the name of the model that we are referencing
  }],
});

const PlaylistModel = mongoose.model('playlistCollection', playlistSchema);

export default PlaylistModel;
