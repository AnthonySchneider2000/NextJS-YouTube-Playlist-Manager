import connectToDatabase from '@/utils/db';
import mongoose from "mongoose";

export default async function handler(req, res) {
  // Connect to the database
  await connectToDatabase();

  // Get the search term from the request body
  const { searchTerm } = req.body;

  // Find all songs that contain the search term in their title or artist
  const songs = await mongoose.connection.db
    .collection("songs")
    .find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { artist: { $regex: searchTerm, $options: "i" } },
      ],
    })
    .toArray();

  // Return the search results
  res.status(200).json({ success: true, songs });
}
