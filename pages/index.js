import React from "react";
import connectToDatabase from '@/utils/db';
import Sidebar from "@/components/Sidebar";
import SearchButton from "@/components/SearchButton";
//import Playlist from "@/components/Playlist";
import styles from "../styles/App.module.css";
import mongoose from "mongoose";
import { withSession } from "@/utils/session"

function Home({ user }) {
  const greeting = user ? `Hello, ${user.name}!` : "YouTube Playlist Manager";
  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      <header className={styles["App-header"]}>
        <h1>{greeting}</h1>
      </header>
      {/* add the image from public/guitar.webp to the center of the screen, use theme guitar-logo */}
      <img className={styles["guitar-logo"]} src="/guitar.webp" alt="guitar logo" />
    </div>
  );
}

// get data from database
export const getServerSideProps = withSession(async function ({ req }) {
  await connectToDatabase();

  const user = req.session.get("user") || null;

  return {
    props: {
      user,
    },
  };
});

export default Home;
