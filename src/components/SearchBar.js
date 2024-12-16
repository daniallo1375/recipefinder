import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        value={query}
        className="form-control"
        placeholder="Search Recipe by Ingredients"
        name="query"
        disabled={isLoading}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;
