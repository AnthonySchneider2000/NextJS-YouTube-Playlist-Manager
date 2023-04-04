/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styles from "../styles/SearchButton.module.css";

export default class SearchButton extends React.Component {
  searchHandler = () => {
    //prompt user for search term
    let searchTerm = prompt("Enter search term:");
    // console.log(searchTerm);
    //go to search page
    if(searchTerm){
      window.location.href = "/search/" + searchTerm;
    }
  };
  render() {
    return (
      <button className={styles["search-symbol"]} onClick={this.searchHandler}>🔎︎</button>
    );
  }
}
