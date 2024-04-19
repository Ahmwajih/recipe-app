import { createContext, useState, useContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [mealType, setMealType] = useState('');

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes, searchInput, setSearchInput, mealType, setMealType }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    return useContext(RecipeContext);
};
