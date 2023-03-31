import React from "react";
import ReactDOM from "react-dom/client";
// import styles from "../styles/index.module.css";
import App from "./App";
import Playlists from "./Playlists";
import PlaylistPage from "./PlaylistPage";
import SongPage from "./SongPage";
import SearchPage from "./SearchPage";
import reportWebVitals from "./reportWebVitals";
import Link from "next/link";
import connectToDatabase from "./db";
import Sidebar from "./Sidebar";
import SearchButton from "./SearchButton";
//import Playlist from "./Playlist";
import styles from "../styles/App.module.css";
import mongoose from "mongoose";

export default function Home({ data }) {
  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      <header className={styles["App-header"]}>
        <h1>Data from database: {JSON.stringify(data)}</h1>
      </header>
    </div>
  );
}

// get data from database
export async function getStaticProps() {
  await connectToDatabase();

  console.log(mongoose.connection);

  const data = await mongoose.connection.db.collection("playlists").findOne();

  const serializableData = {
    _id: data._id.toString(), // convert _id to a string
    name: data.name,
  };

  return {
    props: {
      data: serializableData || {},
    },
  };
}
