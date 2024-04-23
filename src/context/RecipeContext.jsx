import { createContext, useState, useContext, useEffect } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [mealType, setMealType] = useState("");

  const APP_ID = 'ad4aeddd';
  const APP_KEY = '12bc7a208be9e0f20a51f4204690efe8';
  const query = searchInput;
  const meal = mealType;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getAPI = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRecipes(data.hits);
    } catch (error) {
      console.error("Hello Error Error:", error);
    }
  };
  useEffect(() => {
    getAPI();
  }, [searchInput, mealType]);
  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        searchInput,
        setSearchInput,
        mealType,
        setMealType,
        getAPI,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
