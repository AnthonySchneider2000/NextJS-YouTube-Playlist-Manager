// [SongID].js
import React from "react";
import styles from "@/styles/App.module.css";
import playlistCSS from "@/styles/Playlists.module.css";
import connectToDatabase from "@/utils/db";
import mongoose from "mongoose";
import Layout from "@/components/Layout";

export default function SongPage({ song }) {
  //function to santize and return the youtube link
  const sanitizeYoutubeLink = (link) => {
    //split the link by the '='
    const splitLink = link.split("=");
    //get the last part of the link
    const videoID = splitLink[splitLink.length - 1];
    //return the link with the videoID
    return `https://www.youtube.com/embed/${videoID}`;
  };

  const addYoutubeLink = async (link) => {
    //song id
    console.log(song);
    const SongID = song.id;
    console.log(SongID);
    const response = await fetch(`/api/addYoutubeLink/${SongID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        youtubeLink: link,
      }),
    });

    if (response.ok) {
      // Refresh the page to update the playlists
      window.location.reload();
    } else {
      console.error("Failed to add YouTube Link:", response.status);
    }
  };

  function handleAddYoutubeLink() {
    let link = prompt("Enter youtube link:");
    //sanitize the link
    link = sanitizeYoutubeLink(link);
    if (link) {
      addYoutubeLink(link);
    }
  }
  return (
    <Layout noHeader>
      <div className={styles["App-header"]}>
        <h1 className={styles["small-bottom-margin"]}>{song.name}</h1>
        <h2 className={styles["small-margins"]}>Artist: {song.artist}</h2>
        <button
          className={playlistCSS["create-button"]}
          onClick={handleAddYoutubeLink}
        >
          Add<br></br>Link
        </button>
        {/* <div className={styles["id"]}>Artist: {song.artist}</div> */}
      </div>
      {/* shows a youtube embed if the song object has one, if not displays a message */}
      {song.youtubeLink ? (
        <iframe
          className={styles["youtube-embed"]}
          width="560"
          height="315"
          src={song.youtubeLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      ) : (
        <p className={styles["youtube-embed"]}>
          No video available for this song.
        </p>
      )}
      <div>ID: {song.id}</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await connectToDatabase();

  const { PlaylistID, SongID } = context.params; // get the playlist id and song id from the url

  //search the songs collection for the song with the id SongID
  const song = await mongoose.connection.db
    .collection("songs")
    .findOne({ _id: new mongoose.Types.ObjectId(SongID) });

  return {
    props: {
      // make the song serializable
      song: {
        name: song.title,
        artist: song.artist,
        id: song._id.toString(),
        youtubeLink: song.youtubeLink ?? "", //if youtube link is undefined, set it to an empty string
      },
    },
  };
}
