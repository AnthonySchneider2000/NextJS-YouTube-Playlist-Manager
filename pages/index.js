import React from "react";
import connectToDatabase from '@/utils/db';
import Layout from "@/components/Layout";
import styles from "@/styles/App.module.css";
import { withSession } from "@/utils/session"

function Home({ user }) {
  const greeting = user ? `Hello, ${user.name}!` : "YouTube Playlist Manager";
  return (
    <Layout title={greeting}>
      <div className={styles["App-header"]}>
        Use the sidebar on the left to<b></b>navigate to the page you want to use.
      </div>
      {/* add the image from public/guitar.webp to the center of the screen, use theme guitar-logo */}
      <img className={styles["guitar-logo"]} src="/guitar.webp" alt="guitar logo" />
    </Layout>
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
