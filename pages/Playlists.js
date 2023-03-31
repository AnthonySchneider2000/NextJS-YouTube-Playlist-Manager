import Playlist from "./Playlist";
import Sidebar from "./Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import playlistCSS from "../styles/Playlists.module.css";
import SearchButton from "./SearchButton";
import connectToDatabase from "./db";
import mongoose from "mongoose";

export default function Playlists({ data }) {
  const playlists = data?.playlists || [];

  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      <header className={styles["App-header"]}>
        <h1>Playlists</h1>
        <button
          className={playlistCSS["create-button"]}
          // onClick={this.addPlaylist}
        >
          Create<br></br>Playlist
        </button>
        <div className={playlistCSS["playlistList"]}>
          {playlists.map((playlist) => (
            <Playlist
              key={playlist._id}
              id={playlist._id}
              name={playlist.name}
              songs={playlist.songs ?? []} // Set songs to an empty array if it is undefined
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export async function getServerSideProps() {
  await connectToDatabase();
  const playlists = await mongoose.connection.db
    .collection("playlists")
    .find()
    .toArray();

  const serializableData = {
    playlists: playlists.map((playlist) => ({
      _id: playlist._id.toString(),
      name: playlist.name,
      songs: playlist.songs ?? [], // Set songs to an empty array if it is undefined
    })),
  };

  return {
    props: {
      data: serializableData,
    },
  };
}
