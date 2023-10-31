import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
const SearchForm = ({
  fetchSearchedCocktails,
  searchedDrinks,
  setSearchedDrinks,
}) => {
  return (
    <Wrapper>
      <form className="form" onSubmit={fetchSearchedCocktails}>
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          value={searchedDrinks}
          onChange={(e) => setSearchedDrinks(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
