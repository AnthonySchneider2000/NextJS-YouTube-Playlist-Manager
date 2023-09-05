// [PlaylistID].js
import React from "react";
import playlistCSS from "@/styles/Playlists.module.css";
import Song from "@/components/Song";
import { useRouter } from "next/router";
import connectToDatabase from "@/utils/db";
import mongoose from "mongoose";
import Layout from "@/components/Layout";

export default function PlaylistPage({ allSongs, songs, playlistName }) {
  const router = useRouter();
  const { PlaylistID } = router.query;

  const addSong = async (id) => {
    //search the song collection for the song with the given id
    //if it exists, add it to the song array in the playlist
    //if it doesn't exist, return an error

    const song = allSongs.find((song) => song.id === id);
    if (song) {
      const response = await fetch(`/api/${PlaylistID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          song: song,
        }),
      });

      if (response.ok) {
        // Refresh the page to update the playlists
        window.location.reload();
      } else {
        console.error("Failed to add song:", response.status);
      }
    } else {
      alert("Song not found");
    }
  };

  function handleAddSong() {
    let id = prompt("Enter song ID:");
    if (id) {
      addSong(id);
    }
  }
  return (
    <Layout useHeaderStyling title={playlistName}>
      <button className={playlistCSS["create-button"]} onClick={handleAddSong}>
        Add<br></br>Song
      </button>
      <div className={playlistCSS["playlistList"]}>
        {songs.map((song) => (
          <Song name={song.name} artist={song.artist} id={song.id} key={song.id} />
        ))}
      </div>
    </Layout>
  );
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

  const allSongs = await mongoose.connection.db
    .collection("songs")
    .find()
    .toArray();

  //iterate through allSongs and
  let songsInPlaylist = [];
  for (let i = 0; i < playlist.songs.length; i++) {
    for (let j = 0; j < allSongs.length; j++) {
      if (playlist.songs[i].toString() === allSongs[j]._id.toString()) {
        songsInPlaylist.push(allSongs[j]);
      }
    }
  }

  return {
    props: {
      allSongs: allSongs.map((song) => ({
        _id: song._id.toString(),
        name: song.title,
        artist: song.artist,
        id: song._id.toString(),
      })), // this is the array of all songs, as objects with name and id
      songs: songsInPlaylist.map((song) => ({
        _id: song._id.toString(),
        name: song.title,
        artist: song.artist,
        id: song._id.toString(),
      })), // this is the array of songs in the playlist, as objects with name and id
      playlistName: playlist.name,
    },
  };
}
