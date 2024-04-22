import { Link } from 'react-router-dom';
import './styleNav.css';

function Navbar() {
  return (
    <div className='nav'>
      <div>
        <Link to="/Home" className='nav-link'>
          <span className='clarus'>CLARUSWAY</span> <span className='recipe'>RECIPE</span>
        </Link>
      </div>
      <div className='about-nav'>
        <Link to="/about" className='nav-link'>ABOUT</Link>
        <a href="https://github.com/Ahmwajih" className='nav-link' target="_blank" rel="noopener noreferrer">GITHUB</a>
        <Link to="/logout" className='nav-link'>LOGOUT</Link>
      </div>
    </div>
  );
}

export default Navbar;
