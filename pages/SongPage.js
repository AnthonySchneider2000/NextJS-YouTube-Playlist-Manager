import Sidebar from "./Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import styless from "../styles/Playlists.module.css";
import SearchButton from "./SearchButton";

//load playlists from local storage
//let playlists = JSON.parse(localStorage.getItem("playlists"));
let playlists = [];
if (playlists === null) {
  playlists = [];
}
//retrieve current playlist by id
let curPlaylist = playlists.find((playlist) => playlist.id);
//retrieve index of current playlist
// let curPlaylistIndex = playlists.indexOf(curPlaylist);
// let songs = curPlaylist.songs;
let songs = [];
let curSong = songs.find((song) => song.id);
// let curSongIndex = songs.indexOf(curSong);

//renders the app page, with a vertical list of playlists and a create playlists button
export default class SongPage extends React.Component {
  render() {
    return (
      <div className={styles["App"]}>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <SearchButton />
        <div className={styles["App-header"]}>
          <h1>{curSong.name}</h1>
        </div>
      </div>
    );
  }

}
