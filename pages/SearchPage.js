import Sidebar from "@/components/Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import styless from "../styles/Playlists.module.css";
import SearchButton from "@/components/SearchButton";

//renders the app page, with a vertical list of playlists and a create playlists button
export default class SearchPage extends React.Component {
  render() {
    return (
      <div className={styles["App"]}>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <SearchButton />
        <div className={styles["App-header"]}>
          <h1>Search Results</h1>
        </div>
      </div>
    );
  }

}
