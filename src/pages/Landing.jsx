import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
const Landing = () => {
  // search by name :  https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  //lookup details by id :  www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [searchedDrinks, setSearchedDrinks] = useState("");

  const theCocktailDBUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const fetchCocktails = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(theCocktailDBUrl);
      setDrinks(res.data.drinks);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  const fetchSearchedCocktails = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${theCocktailDBUrl}${searchedDrinks}`);
      setDrinks(res.data.drinks);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SearchForm
        fetchSearchedCocktails={fetchSearchedCocktails}
        searchedDrinks={searchedDrinks}
        setSearchedDrinks={setSearchedDrinks}
      />
      <CocktailList drinks={drinks} fetchCocktails={fetchCocktails} />
    </>
  );
};

export default Landing;
