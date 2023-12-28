import React from "react";
import "../styles/NavBar.css";

export default function NavBar({ inputValue, setInputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          // inputValue=e.target.value;  === > wrong way of doing it
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        placeholder="Search"
        className="search-bar"
      />
    </div>
  );
}
