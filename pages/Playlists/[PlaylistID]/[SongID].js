// [SongID].js
import Sidebar from "../../Sidebar";
import React from "react";
import styles from "../../../styles/App.module.css";
import SearchButton from "../../SearchButton";
import connectToDatabase from "../../db";
import mongoose from "mongoose";

export default function SongPage({ song }) {
  return (
    <div className={styles["App"]}>
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <SearchButton />
      <div className={styles["App-header"]}>
        <h1>{song.name}</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  await connectToDatabase();

  const { PlaylistID, SongID } = context.params;
  const playlist = await mongoose.connection.db.collection("playlists").findOne({ _id: new mongoose.Types.ObjectId(PlaylistID) });

  if (!playlist) {
    // handle playlist not found error
    return {
      notFound: true
    }
  }

  const song = playlist.songs.find(song => song.id === SongID);

  if (!song) {
    // handle song not found error
    return {
      notFound: true
    }
  }

  return {
    props: {
      song: song,
      playlistName: playlist.name,
    },
  };
}

