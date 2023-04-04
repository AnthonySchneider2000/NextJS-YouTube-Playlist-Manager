import connectToDatabase from '../db';
import Playlist from '../../models/playlist';

export default async function handler(req, res) {
  await connectToDatabase();

  const {
    query: { PlaylistID },
    body: { song },
  } = req;

  try {
    const playlist = await Playlist.findOneAndUpdate(
      { _id: PlaylistID },
      { $push: { songs: song } },
      { new: true }
    );

    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    return res.status(200).json({ message: 'Song added to playlist', playlist });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
