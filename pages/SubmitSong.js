import Sidebar from "./Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import styless from "../styles/Playlists.module.css";
import SearchButton from "./SearchButton";



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
          <h1>Submit Song</h1>
        </div>
      </div>
    );
  }

}
