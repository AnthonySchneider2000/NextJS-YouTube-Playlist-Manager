import React from "react";
import Sidebar from "./Sidebar";
import SearchButton from "./SearchButton";
import styles from "../styles/App.module.css";
//TODO: BCRYPT
export default function Register() {
  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div className={styles["App-header"]}>
        <h1>Register</h1>
      </div>
      <form className={styles["registration-form"]} action="/api/register" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Register</button>
      </form>
      <SearchButton />
    </div>
  );
}
