import React from "react";
import styles from "@/styles/App.module.css";
import Layout from "@/components/Layout";
//TODO: BCRYPT
export default function Register() {
  return (
    <Layout title="Register">
      <div className={styles["spacer"]}></div>
      <form
        className={styles["registration-form"]}
        action="/api/register"
        method="post"
      >
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </Layout>
      
  );
}
