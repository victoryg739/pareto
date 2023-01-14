
import navbarCss from './navbar.module.css'
import { Link } from 'react-router-dom'

function navbar(){
  //test
  // commit
    return(
      <nav className="navbar navbar-light bg-light">
        <h1 className="navbar-brand">Navbar</h1>
        <form className="form-inline">
          <button type="button" className={`${navbarCss.navBtn} btn btn-outline-success`}>
            <Link to="/login">Login</Link>
          </button>
          <button type="button" className={`${navbarCss.navBtn} btn btn-outline-danger`}>
          <Link to="/signup">Sign Up</Link>
          </button>
        </form>
      </nav>

    );
}
export default navbar;