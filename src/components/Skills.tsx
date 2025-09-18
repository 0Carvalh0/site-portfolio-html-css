const Skills = () => {
  return (
    <section id="habilidades" className="skills">
      <h2 className="section-title">Minhas Habilidades</h2>
      <div className="skills__container">
        <div className="skill-category">
          <h3 className="skill-category__title">Front-end</h3>
          <ul className="skill-category__list">
            <li className="skill-category__item">
              <i className="fab fa-html5"></i> HTML5
            </li>
            <li className="skill-category__item">
              <i className="fab fa-css3-alt"></i> CSS3
            </li>
            <li className="skill-category__item">
              <i className="fab fa-js"></i> JavaScript
            </li>
            <li className="skill-category__item">
              <i className="fab fa-react"></i> React.js
            </li>
            <li className="skill-category__item">
              <svg
                className="skill-category__icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>TypeScript</title>
                <path
                  d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                  fill="currentColor"
                />
              </svg>
              TypeScript
            </li>
            <li className="skill-category__item">
              <i className="fab fa-sass"></i> SASS
            </li>
            <li className="skill-category__item">
              <svg
                className="skill-category__icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Tailwind CSS</title>
                <path
                  d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                  fill="currentColor"
                />
              </svg>
              Tailwind CSS
            </li>
            <li className="skill-category__item">
              <i className="fab fa-bootstrap"></i> Bootstrap
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3 className="skill-category__title">Ferramentas</h3>
          <ul className="skill-category__list">
            <li className="skill-category__item">
              <i className="fab fa-git-alt"></i> Git
            </li>
            <li className="skill-category__item">
              <i className="fab fa-github"></i> GitHub
            </li>
            <li className="skill-category__item">
              <i className="fab fa-npm"></i> NPM
            </li>
            <li className="skill-category__item">
              <i className="fab fa-figma"></i> Figma
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
