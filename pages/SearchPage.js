import Sidebar from "@/components/Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import SearchButton from "@/components/SearchButton";
import Layout from "@/components/Layout";

//renders the app page, with a vertical list of playlists and a create playlists button
export default class SearchPage extends React.Component {
  render() {
    return <Layout title="Search Results"></Layout>;
  }
}
