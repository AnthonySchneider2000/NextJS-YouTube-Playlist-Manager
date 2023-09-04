import React from "react";
import styles from "../styles/App.module.css";
import Layout from "@/components/Layout";

export default function Login() {
  return (
    <Layout title="Login">
      <form className={styles["registration-form"]} action="/api/login" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}
