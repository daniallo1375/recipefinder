import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        value={query}
        className="form-control"
        placeholder="Search Recipe"
        name="query"
        disabled={isLoading}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        disabled={isLoading || !query}
        type="submit"
        className="btn"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
