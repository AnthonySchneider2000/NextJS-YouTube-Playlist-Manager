/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styles from "../styles/App.module.css";
import styless from "../styles/Playlist.module.css";

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id,
    };
  }

  render() {
    return (
      <div className={styles["playlist"]} onClick={this.openSong}>
        <h1>{this.state.name}</h1>
      </div>
    );
  }

  openSong = () => {
    //add song id to the end of the url
    window.location.href += "/" + this.state.id;
  };


}