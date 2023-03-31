import Playlist from "./Playlist";
import Sidebar from "./Sidebar";
import React from "react";
import styles from "../styles/App.module.css";
import playlistCSS from "../styles/Playlists.module.css";
import SearchButton from "./SearchButton";
import PlaylistModel from "../models/playlist";

//renders the app page, with a vertical list of playlists and a create playlists button
export default class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }

  async componentDidMount() {
    try {
      // Fetch all playlists from the database
      const playlists = await PlaylistModel.find({});
      // Set the state with the fetched playlists
      this.setState({ playlists });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className={styles["App"]}>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <SearchButton />
        <div className={styles["App-header"]}>
          <h1>Playlists</h1>
          <div className={playlistCSS["playlistList"]}>
            {this.state.playlists.map((playlist) => (
              <Playlist
                key={playlist._id}
                id={playlist._id}
                name={playlist.name}
                songs={playlist.songs}
              />
            ))}
          </div>
          {/* keep in mind it may sort by playlist.id now, idk */}
          <button
            className={playlistCSS["create-button"]}
            onClick={this.addPlaylist}
          >
            Create<br></br>Playlist
          </button>
        </div>
      </div>
    );
  }
  addPlaylist = async () => {
    // Accepts user input for playlist name and creates a new playlist object
    const name = prompt("Enter playlist name:");
    const playlist = new PlaylistModel({ name, songs: [] });

    try {
      // Save the new playlist to the database
      const savedPlaylist = await playlist.save();
      // Update the state with the new playlist
      this.setState({ playlists: [...this.state.playlists, savedPlaylist] });
    } catch (error) {
      console.error(error);
    }
  };
}
