/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styles from "@/styles/Song.module.css";

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      artist: this.props.artist,
      id: this.props.id,
    };
  }

  render() {
    return (
      <div className={styles["song"]} onClick={this.openSong}>
        <h1>{this.state.name}</h1>
        <h3>{this.state.artist}</h3>
      </div>
    );
  }

  openSong = () => {
    //add song id to the end of the url
    let url = window.location.href;
    if(url.includes("/Playlists/")){
      window.location.href += "/" + this.state.id;
    }
    else{
      window.location.href = "/Songs/" + this.state.id;
    }
  };


}