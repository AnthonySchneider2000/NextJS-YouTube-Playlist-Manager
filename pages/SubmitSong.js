import Sidebar from "@/components/Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import SearchButton from "@/components/SearchButton";

export default function SubmitSong() {
  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className={styles["App-header"]}>
        <h1>Submit Song</h1>
      </div>
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
      <SearchButton />
    </div>
  );
}
