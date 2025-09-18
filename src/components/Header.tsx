const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img
          src="./assets/images/logos/Devictor_LogoBranca.png"
          alt="Logo Devictor"
          className="header__logo"
        />
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#inicio" className="header__menu-link">
              Início
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#sobre" className="header__menu-link">
              Sobre
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#projetos" className="header__menu-link">
              Projetos
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#habilidades" className="header__menu-link">
              Habilidades
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#contato" className="header__menu-link">
              Contato
            </a>
          </li>
        </ul>
        <button className="header__theme-toggle" aria-label="Alternar tema">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
        </button>
      </nav>
    </header>
  );
}
 
export default Header;