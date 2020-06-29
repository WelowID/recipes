import React, {useContext} from "react";
import {RecipesContext} from "../context/RecipesContext";
import Recipe from "./Recipe";
import ModalRecipe from "./ModalRecipe";

const RecipesList = () => {
  const {recipes} = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.idDrink}
          recipe={recipe}
        />
      ))}
      <ModalRecipe/>
    </div>
  );
}

export default RecipesList;