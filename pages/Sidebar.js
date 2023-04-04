/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";

const Sidebar = ({isLoggedIn}) => {
  return (
    <Menu>
      <Link href="/" className={styles["menu-item"]}>Home</Link>
      <Link href="/Playlists" className={styles["menu-item"]}>Playlists</Link>
      <Link href="/SubmitSong" className={styles["menu-item"]}>Submit Song</Link>
      <Link href="/Register" className={styles["menu-item"]}>Register</Link>
      <Link href="/Login" className={styles["menu-item"]}>Login</Link>
      <Link href="/api/logout" className={styles["menu-item"]}>Logout</Link>
    </Menu>
  );
};
// App.displayName = 'Sidebar';
export default Sidebar;
