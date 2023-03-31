// PURPOSE: This file contains the Playlist class which is used to create a playlist object.
// This object contains the playlist name, the playlist id, and an array of songs.
// when rendered, the playlist object will display a rectangle with the playlist name
// clicking on this rectangle will take the user to the playlist page

/* eslint-disable import/no-anonymous-default-export */
import Link from "next/link";
import React from "react";
import styles from "../styles/App.module.css";
import playlistCSS from "../styles/Playlist.module.css";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id,
      songs: this.props.songs,
    };
  }

  render() {
    return (
      
      <div className={playlistCSS["playlist"]}>
        <h1>
          {/* link to /Playlists/[id] */}
          <Link href={`/Playlists/${this.state.id}`}>{this.state.name}</Link>
        </h1>
      </div>
    );
  }

  openPlaylist = () => {
    //opens the playlist page, passing it this object
    // window.location.href = "/playlists/" + this.state.id;
    
  };
}
