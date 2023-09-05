import React, { useState } from "react";
import styles from "@/styles/App.module.css";
import Layout from "@/components/Layout";
import playlistCSS from "@/styles/Playlists.module.css";

export default function SubmitSong() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    try {
      const response = await fetch("/api/youtubeQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm: query }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.data.items); // Assuming data.items contains search results
      } else {
        throw new Error("Failed to search for song");
      }
    } catch (error) {
      console.error("Failed to search for song:", error);
    }
  };
  return (
    <Layout title="Submit Song">
      <form
        className={styles["registration-form"]}
        action="/api/song"
        method="post"
      >
        <label htmlFor="songName">Song Name:</label>
        <input type="text" id="songName" name="songName" required />
        <label htmlFor="artistName">Artist Name:</label>
        <input type="text" id="artistName" name="artistName" required />

        <button type="submit">Submit</button>
      </form>
      <form className={styles["registration-form"]} onSubmit={handleSearch}>
        <label htmlFor="searchTerm">Search for a song:</label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <h1>Search Results</h1>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id.videoId} className={playlistCSS["playlistListFlex"]}>
              <a href={`/song/${result.id.videoId}`}>{result.snippet.title}</a>
            </li>
          ))}
        </ul>

      </div>

    </Layout>
  );
}
