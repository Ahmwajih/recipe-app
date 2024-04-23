import "./StyleHeader.css";
import FormAdd from "./FormAdd";
import { useRecipeContext } from "../../context/RecipeContext";
import Card from 'react-bootstrap/Card';  // Import the Card component

function Header() {
  const { recipes } = useRecipeContext();

  return (
    <div className="header">
      <div>
        <FormAdd />
      </div>
      <div className="bg"></div>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card-container" key={index}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={recipe.recipe.image} alt={recipe.recipe.label} />
              <Card.Body>
                <Card.Title>{recipe.recipe.label}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;

