import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { RecipeProvider } from "./context/RecipeContext";
import About from "./pages/About/About";
import Not_Found from "../src/pages/Not-Found/Not_Found";
import Login from '../src/pages/login/Login'

function App() {
  return (
    <>
        <RecipeProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Not_Found/>} />
          </Routes>
        </RecipeProvider>
    </>
  );
}

export default App;
