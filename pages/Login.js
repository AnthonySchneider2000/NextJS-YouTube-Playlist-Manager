import React from "react";
import Sidebar from "./Sidebar";
import SearchButton from "./SearchButton";
import styles from "../styles/App.module.css";

export default function Login() {
  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div className={styles["App-header"]}>
        <h1>Login</h1>
      </div>
      <form className={styles["registration-form"]} action="/api/login" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <SearchButton />
    </div>
  );
}
