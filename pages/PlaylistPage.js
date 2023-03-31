import Sidebar from "./Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import styless from "../styles/Playlists.module.css";
import Song from "./Song";
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
let curPlaylistIndex = playlists.indexOf(curPlaylist);
// let songs = curPlaylist.songs;
let songs = [];
//renders the app page, with a vertical list of playlists and a create playlists button
export default class PlaylistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songs,
    };
  }

  render() {
    return (
      <div className={styles["App"]}>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <SearchButton />
        <div className={styles["App-header"]}>
          {/* <h1>{curPlaylist.name}</h1> */}
          <h1>Playlist</h1>
          <div className={styles["playlistList"]}>
            {/* <div className={styles["id">id: {curPlaylist.id}</div> */}
            {this.state.songs.map((song) => (
              <Song name={song.name} id={song.id} key={song.id} />
            ))}
          </div>
          <button className={styles["create-button"]} onClick={this.addSong}>
            Add<br></br>Song
          </button>
        </div>
      </div>
    );
  }
  addSong = () => {
    //accepts user input for playlist name, creates a new playlist object, and adds it to the list of playlists
    let name = prompt("Enter song name:");
    //random id
    let id = Math.floor(Math.random() * 1000000000);
    let song = { name: name, id: id };
    playlists[curPlaylistIndex].songs.push(song); //maybe change this to a song object later
    //write to local storage
    //localStorage.setItem("playlists", JSON.stringify(playlists));
    this.setState({ songs: songs });
  };
}
