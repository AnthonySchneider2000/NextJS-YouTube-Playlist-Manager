import connectToDatabase from '../../db';
import Song from '../../../models/song';

export default async function handler(req, res) {
  await connectToDatabase();

  const {
    query: { SongID },
    body: { youtubeLink },
  } = req;

  try {
    const song = await Song.findOneAndUpdate(
      { _id: SongID }, // Find the song with the specified ID
      { $set: { youtubeLink } }, // Set the youtubeLink to the specified youtubeLink
      { new: true } // Return the updated song
    );

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    return res.status(200).json({ message: 'YouTube link added', song });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
