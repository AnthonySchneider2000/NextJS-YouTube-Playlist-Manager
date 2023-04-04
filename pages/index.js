import React from "react";
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
        <h1>Music DB</h1>
      </header>
      {/* add the image from public/guitar.webp to the center of the screen, use theme guitar-logo */}
      <img className={styles["guitar-logo"]} src="/guitar.webp" alt="guitar logo" />
    </div>
  );
}

// get data from database
export async function getServerSideProps() {
  await connectToDatabase();

  // console.log(mongoose.connection);

  const data = await mongoose.connection.db.collection("playlists").findOne();

  const serializableData = {
    // _id: data._id.toString(), // convert _id to a string
    name: data.name,
  };

  return {
    props: {
      data: serializableData || {},
    },
  };
}
