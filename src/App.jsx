
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import { RecipeProvider } from './context/RecipeContext';
import Login from '../src/pages/login/Login'

function App() {
  return (
    <>
      <Router>
        <RecipeProvider>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </RecipeProvider>
      </Router>
/    </>
  );
}

export default App;

