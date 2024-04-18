
import './styleNav.css'
function Navbar() {
  return (
    <div className='nav'>
      <div>
        <a href="#">

          <span className='clarus'>CLARUSWAY</span> <span className='recipe'>RECIPE</span>
        </a>
      </div>
      <div className='about-nav'>
        <a href="#">ABOUT</a>
        <a href="https://github.com/Ahmwajih">GITHUB</a>
        <a href="#">LOGOUT</a>
      </div>
    </div>
  )
}

export default Navbar