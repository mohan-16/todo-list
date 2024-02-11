import React from "react";
import "./content.css";

const SearchItems = ({ search, setSearch }) => {
  return (
    <form
      className="Additems "
      onSubmit={(e) => e.preventDefault()}
      style={{ margin: "10px ", marginLeft: "-45px"  }}
    >
      <input
        type="text"
        id="seacrh"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItems;
