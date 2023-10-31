import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const cocktailDetailsUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const Cocktail = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
  console.log(details);
  const getCocktailDetails = async () => {
    try {
      const res = await axios.get(`${cocktailDetailsUrl}${id}`);
      setDetails(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCocktailDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!details) {
    navigate("/");
  }

  const singleDrink = details.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = [
    singleDrink.strIngredient1,
    singleDrink.strIngredient2,
    singleDrink.strIngredient3,
  ];
  console.log("Ingredient", ingredients.join(","));

  return (
    // idDrink,strAlcoholic,strCategory,strCreativeCommonsConfirmed,strDrink,strDrinkThumb,strGlass,strIngredient1,strIngredient2,strIngredient3,strInstructions,strInstructionsDE,strInstructionsIT

    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients && ingredients.join(",")}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
