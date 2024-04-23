function RecipeCard({ recipe }) {  // Accept recipe as a prop
  return (
    <div className="recipe-card">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
    </div>
  );
}

export default RecipeCard;

