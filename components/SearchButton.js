import React from "react";
import styles from "@/styles/SearchButton.module.css";
import { useRouter } from "next/router";

export default function SearchButton() {
  const router = useRouter();
  const searchHandler = async () => {
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
          router.push({
            pathname: "/SearchPage",
            query: { songs: JSON.stringify(songs) },
          });
        } else {
          console.log("Search failed.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <button className={styles["search-symbol"]} onClick={searchHandler}>
      🔎︎
    </button>
  );
}
