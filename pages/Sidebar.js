/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/Sidebar.module.css";
import App from "./App";
import Link from "next/link";

const Sidebar = (props) => {
  return (
    <Menu>
      {/* <a className={styles["menu-item} href="/">
        Home
      </a>
      <a className={styles["menu-item} href="/playlists">
        Playlists
      </a>
      <a className={styles["menu-item} href="/submit">
        Submit Song
      </a> */}
      {/* the above comment displays how this was previously done, it should now use the <Link> tag */}
      <Link href="/" className={styles["menu-item"]}>Home</Link>
      <Link href="/Playlists" className={styles["menu-item"]}>Playlists</Link>
      <Link href="/SubmitSong" className={styles["menu-item"]}>Submit Song</Link>
      <Link href="/Login" className={styles["menu-item"]}>Login</Link>
      <Link href="/Register" className={styles["menu-item"]}>Register</Link>
    </Menu>
  );
};
// App.displayName = 'Sidebar';
export default Sidebar;
