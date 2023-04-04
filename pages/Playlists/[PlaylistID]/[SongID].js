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
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      <div className={styles["App-header"]}>
        <h1 className={styles["small-bottom-margin"]}>{song.name}</h1>
        <h2 className={styles["small-margins"]}>Artist: {song.artist}</h2>
        {/* <div className={styles["id"]}>Artist: {song.artist}</div> */}
      </div>
      {song.youtubeLink ? (
        <iframe
          className={styles["youtube-embed"]}
          width="560"
          height="315"
          src={song.youtubeLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
      ) : (
        <p className={styles["youtube-embed"]}>No video available for this song.</p>
      )}
      
    </div>
  );
}

export async function getServerSideProps(context) {
  await connectToDatabase();

  const { PlaylistID, SongID } = context.params; // get the playlist id and song id from the url

  const playlist = await mongoose.connection.db
    .collection("playlists")
    .findOne({ _id: new mongoose.Types.ObjectId(PlaylistID) });
  if (!playlist) {
    // handle playlist not found error
    return {
      notFound: true,
    };
  }

  // const song = playlist.songs.find(song => song._id.toString() === SongID); // find the song in the playlist
  // if (!song) {
  //   // handle song not found error
  //   return {
  //     notFound: true
  //   }
  // }

  //search the songs collection for the song with the id SongID
  const song = await mongoose.connection.db
    .collection("songs")
    .findOne({ _id: new mongoose.Types.ObjectId(SongID) });
  console.log("song: ");
  console.log(song);
  return {
    props: {
      // make the song serializable
      song: {
        name: song.title,
        artist: song.artist,
        id: song._id.toString(),
        //if youtube link is undefined, set it to an empty string
        youtubeLink: song.youtubeLink ?? "",
      },
      playlistName: playlist.name,
    },
  };
}
