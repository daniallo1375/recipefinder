import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">🍴 Danial's Recipe Finder </a>
      </div>
      <div className="navbar-search">
        <SearchBar
          handleSubmit={handleSubmit}
          query={query}
          isLoading={isLoading}
          setQuery={setQuery}
        />
      </div>
    </nav>
  );
};

export default Navbar;
