const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-links">
        <a
          href="https://github.com/0Carvalh0"
          target="_blank"
          className="footer__social-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/devjoaocarvalho/"
          target="_blank"
          className="footer__social-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="footer__copyright">
        &copy; 2024 Devictor. Todos os direitos reservados - João Victor
        Carvalho de Souza
      </p>
    </footer>
  );
};

export default Footer;
