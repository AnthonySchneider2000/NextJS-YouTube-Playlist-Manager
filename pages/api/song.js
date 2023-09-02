import connectToDatabase from '@/utils/db';
import Song from "../../models/song";

connectToDatabase();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { songName, artistName } = req.body; // Get the song data from the request body

        // rename the variables to match the model
        let title = songName;
        let artist = artistName;
        
        const newSong = await Song.create({ title, artist }); // Create a new song with the specified data

        // res.status(201).json({ success: true, data: newSong });
        // res.redirect("/Song/" + newSong._id);
        res.redirect("/");
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
