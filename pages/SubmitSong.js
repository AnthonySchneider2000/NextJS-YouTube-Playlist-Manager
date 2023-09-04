import React from "react";
import styles from "@styles/App.module.css";
import Layout from "@/components/Layout";

export default function SubmitSong() {
  return (
    <Layout title="Submit Song">
      <form
        className={styles["registration-form"]}
        action="/api/song"
        method="post"
      >
        {/* song name */}
        <label htmlFor="songName">Song Name:</label>
        <input type="text" id="songName" name="songName" required />
        {/* artist name */}
        <label htmlFor="artistName">Artist Name:</label>
        <input type="text" id="artistName" name="artistName" required />

        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
