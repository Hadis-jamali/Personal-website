import "./Header.css";
function Header() {
  return (
    <header>
      <div className="navbar-container">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="logo">Hadis</h2>
          <nav className="navbar">
            <ul className="d-flex">
              <li className="nav-hover">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-hover">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-hover">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-hover">
                <a className="nav-link" href="#blog">
                  Projects
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
