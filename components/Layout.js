import React from "react";
import Sidebar from "./Sidebar";
import styles from "@/styles/App.module.css";
import SearchButton from "./SearchButton";

const Layout = ({
  useHeaderStyling = false,
  noHeader = false,
  title = "",
  children,
}) => {
  return (
    <div className={styles["App"]}>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <SearchButton />
      {noHeader ? null : (
        <header className={styles["App-header"]}>
          <h1>{title}</h1>
        </header>
      )}
      {useHeaderStyling ? (
        <main className={styles["App-header"]}>{children}</main>
      ) : (
        <main className={styles["App-main"]}>{children}</main> //App-main is currently not implemented
      )}
    </div>
  );
};

export default Layout;
