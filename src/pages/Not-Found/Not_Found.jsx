import './styleFound.css'
import error from '../../assets/error.jpg'
function Not_Found() {
  return (
    <div id="wrapper">
            <img src={error}  id='error'/>
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
        </div >
  )
}

export default Not_Found