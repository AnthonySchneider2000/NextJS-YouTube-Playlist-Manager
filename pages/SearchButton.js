import React from "react";
import styles from "../styles/SearchButton.module.css";

export default class SearchButton extends React.Component {
  searchHandler = async () => {
    // Prompt user for search term
    let searchTerm = prompt("Enter search term:");

    if (searchTerm) {
      try {
        // Make a POST request to the search API endpoint
        const res = await fetch("/api/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ searchTerm }),
        });

        // Parse the response
        const { success, songs } = await res.json();

        if (success) {
          // Log the search results to the console
          console.log(songs);
        } else {
          console.log("Search failed.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  render() {
    return (
      <button className={styles["search-symbol"]} onClick={this.searchHandler}>
        🔎︎
      </button>
    );
  }
}
