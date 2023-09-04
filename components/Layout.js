import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/App.module.css";
import SearchButton from "./SearchButton";

const Layout = ({ children, headerText }) => {
  return (
    <div className={styles["App"]}>
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <SearchButton />
        <header className={styles["App-header"]}>
            <h1>{headerText}</h1>
        </header>
        <main id="page-wrap">{children}</main>
    </div>
    
  );
};

export default Layout;
