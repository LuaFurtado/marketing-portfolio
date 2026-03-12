function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="#hero" className="logo">
          Luana Furtado
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar