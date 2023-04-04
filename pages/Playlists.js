import { useState } from "react";
import Playlist from "./Playlist";
import Sidebar from "./Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import playlistCSS from "../styles/Playlists.module.css";
import SearchButton from "./SearchButton";
import connectToDatabase from "./db";
import mongoose from "mongoose";

export default function Playlists({ data }) {
  const [playlistName, setPlaylistName] = useState("");
  const playlists = data?.playlists || [];
  
  const createPlaylist = async () => {
    try {
      const response = await fetch("/api/playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playlistName,
        }),
      });

      if (response.ok) {
        // Refresh the page to update the playlists
        window.location.reload();
      } else {
        console.error("Failed to create playlist:", response.status);
      }
    } catch (error) {
      console.error("Failed to create playlist:", error);
    }
  };

  const handleCreatePlaylist = () => {
    const name = prompt("Enter playlist name:");

    if (name) {
      setPlaylistName(name);
      createPlaylist();
    }
  };

  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      <header className={styles["App-header"]}>
        <h1>Playlists</h1>
        <button
          className={playlistCSS["create-button"]}
          onClick = {handleCreatePlaylist}
        >
          Create<br></br>Playlist
        </button>
        <div className={playlistCSS["playlistList"]}>
          {playlists.map((playlist) => (
            <Playlist
              key={playlist._id}
              id={playlist._id}
              name={playlist.name}
              // songs={playlist.songs ?? []} // Set songs to an empty array if it is undefined
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
      // songs: playlist.songs ?? [], // Set songs to an empty array if it is undefined
    })),
  };

  return {
    props: {
      data: serializableData,
    },
  };
}