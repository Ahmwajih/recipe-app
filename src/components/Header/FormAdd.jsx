import "./StyleHeader.css";
import { useRecipeContext } from "../../context/RecipeContext";

function FormAdd() {
  const { searchInput, mealType, setSearchInput, setMealType, getAPI} =
    useRecipeContext();

  const intialValue = {
    setSearchInput: "",
    mealType: '',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAPI()

  };
  return (
    <div className="search">
      <div>
        <h1>Food App</h1>
      </div>
      <div className="searchbar">
        <form
          action="form"
          className="formHeader"
          value={intialValue}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            id="input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button id="btn">Search</button>
          <select
            name="food"
            id="food"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="dinner">dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default FormAdd;
