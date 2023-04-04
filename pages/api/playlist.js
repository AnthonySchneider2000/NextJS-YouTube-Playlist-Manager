import connectToDatabase from "../db";
import Playlist from "../../models/playlist";

connectToDatabase();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { name } = req.body; // Get the playlist name from the request body

        const newPlaylist = await Playlist.create({ name }); // Create a new playlist with the specified name

        res.status(201).json({ success: true, data: newPlaylist });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
