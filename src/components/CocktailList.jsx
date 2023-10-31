import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "../components/CocktailCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
const CocktailList = ({ drinks, fetchCocktails }) => {
  console.log("drinks", drinks);
  const formattedDrink = drinks?.map((item) => {
    const {
      idDrink,
      strAlcoholic,
      strCategory,
      strDrink,
      strDrinkThumb,
      strGlass,
    } = item;
    return {
      id: idDrink,
      image: strDrinkThumb,
      glass: strGlass,
      alcoholic: strAlcoholic,
      name: strDrink,
      category: strCategory,
    };
  });

  // if (searchedDrinks.length === 0) {
  //   return <h4>No drink found...</h4>;
  // }
  console.log("drinks", formattedDrink);
  return (
    <Wrapper>
      {drinks !== null ? (
        formattedDrink.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })
      ) : (
        <>
          <h4 style={{ textAlign: "center" }}>No drink found...</h4>
          <button button className="btn" onClick={fetchCocktails}>
            Back Home
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default CocktailList;
