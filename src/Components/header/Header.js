import "./Header.css";
function Header() {
  return (
    <header id="section1">
      <div className="navbar-container">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="logo">Hadis</h2>
          <nav className="navbar">
            <ul className="d-flex">
              <li className="nav-hover">
                <a className="nav-link" href="#section1">
                  Home
                </a>
              </li>
              <li className="nav-hover">
                <a className="nav-link" href="#section2">
                  About
                </a>
              </li>
              <li className="nav-hover">
                <a className="nav-link" href="#section3">
                Project
                </a>
              </li>
              <li className="nav-hover">
                <a className="nav-link" href="#section4">
                  Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <h1 className="hero-title">I'm Hadis Jamali</h1>
      <p className="hero-desc">Web Developer</p>
    </header>
  );
}
export default Header;
