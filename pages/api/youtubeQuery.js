import connectToDatabase from "@/utils/db";

// searches for a song with the yotube api
export default async function handler(req, res) {
  const apiUrl =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" +
    req.body.searchTerm +
    "&key=" +
    process.env.YOUTUBE_API_KEY;
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to search for song");
      }
    })
    .then((data) => {
      res.status(200).json({ success: true, data });
    })
    .catch((error) => {
      console.error("Failed to search for song:", error);
    });
}
