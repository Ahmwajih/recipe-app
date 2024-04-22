// import { useRecipeContext } from '../../context/RecipeContext';
// import { useEffect } from 'react';


// function Recipe() {
//     const { recipes, setRecipes, searchInput, mealType } = useRecipeContext();

//   const APP_ID = process.env.React_APP_ID;
//   const APP_KEY = process.env.REACT_APP_KEY;
//   const query = searchInput
//   const meal = mealType

//   const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

//   const getAPI = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       setRecipes(data.hits);
//     } catch (error) {
//       console.error('Hello Error Error:', error);
//     }
//   };

//   useEffect(() => {
//     getAPI();
//   }, [searchInput, mealType]);
//   return (
//   )
// }

// export default Recipe