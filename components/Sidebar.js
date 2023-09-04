/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

const Sidebar = ({isLoggedIn}) => {
  return (
    <Menu>
      <Link href="/">Home</Link>
      <Link href="/Playlists">Playlists</Link>
      <Link href="/SubmitSong">Submit Song</Link>
      <Link href="/Register">Register</Link>
      <Link href="/Login">Login</Link>
      <Link href="/api/logout">Logout</Link>
    </Menu>
  );
};
// App.displayName = 'Sidebar';
export default Sidebar;
