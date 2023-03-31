import Sidebar from "../Sidebar";
import React from "react";
import styles from "../../styles/App.module.css";
import playlistCSS from "../../styles/Playlists.module.css";
import Song from "../Song";
import SearchButton from "../SearchButton";
import { useRouter } from "next/router";
import connectToDatabase from "../db";
import mongoose from "mongoose";

export default function PlaylistPage({ songs, playlistName }) {
  const router = useRouter();
  const { PlaylistID } = router.query;

  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      <header className={styles["App-header"]}>
        <h1>{playlistName}</h1>
        <button className={playlistCSS["create-button"]} onClick={addSong}>
          Add<br></br>Song
        </button>
        <div className={playlistCSS["playlistList"]}>
          {songs.map((song) => (
            <Song name={song.name} id={song.id} key={song.id} />
          ))}
        </div>
      </header>
    </div>
  );

  function addSong() {
    let name = prompt("Enter song name:");
    let id = Math.floor(Math.random() * 1000000000);
    songs.push({ name: name, id: id });
    //TODO: Save to database
  }
}

export async function getServerSideProps(context) {
  await connectToDatabase();

  const { PlaylistID } = context.params;
  const playlist = await mongoose.connection.db
    .collection("playlists")
    .findOne({ _id: new mongoose.Types.ObjectId(PlaylistID) });

  if (!playlist) {
    // handle playlist not found error
    return {
      notFound: true,
    };
  }

  return {
    props: {
      songs: playlist.songs || [],
      playlistName: playlist.name,
    },
  };
}
