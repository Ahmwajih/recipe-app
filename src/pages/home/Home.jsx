import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { useRecipeContext } from "../../context/RecipeContext";

function Home() {
  const { recipes } = useRecipeContext();

  return (
    <div>
      <Navbar />
      <Header recipes={recipes} />
    </div>
  );
}

export default Home;


