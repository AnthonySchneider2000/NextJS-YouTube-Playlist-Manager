import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Song from "@/components/Song";
import playlistCSS from "@/styles/Playlists.module.css";

const SearchPage = () => {
  const [songs, setSongs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Get the songs from the query string
    const { songs } = router.query;

    // If there are songs, parse them and set them in state
    if (songs) {
      setSongs(JSON.parse(songs));
    }
  }, [router.query]);

  return (
    <Layout title="Search Results" useHeaderStyling>
      <div className={playlistCSS["playlistList"]}>
        {songs.map((song) => (
          <Song name={song.title} id={song._id} key={song._id} />
        ))}
      </div>
    </Layout>
  );
};

export default SearchPage;
