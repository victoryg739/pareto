
import navbarCss from './navbar.module.css'
function navbar(){
  //test
  // commit
    return(
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline">
          <button type="button" className={`${navbarCss.navBtn} btn btn-outline-success`}>Login</button>
          <button type="button" className={`${navbarCss.navBtn} btn btn-outline-danger`}>Sign up</button>
        </form>
      </nav>

    );
}
export default navbar;