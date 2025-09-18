const Projects = () => {
  return (
    <section id="projetos" className="projects">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects__grid">
        <article className="project-card">
          <div className="project-card__image-container">
            <img
              src="./assets/images/thumbnails/quicktaskImg.png"
              alt="To Do list"
              className="project-card__image"
            />
            <div className="project-card__overlay">
              <a
                href="https://quicktask-two.vercel.app/"
                target="_blank"
                className="project-card__link"
              >
                <i className="fas fa-eye"></i> Ver Projeto
              </a>
              <a
                href="https://github.com/0Carvalh0/quicktask"
                target="_blank"
                className="project-card__link"
              >
                <i className="fab fa-github"></i> Ver Código
              </a>
            </div>
          </div>
          <h3 className="project-card__title">QuickTask</h3>
          <p className="project-card__description">
            Uma aplicação simples e eficiente para gerenciar tarefas diárias.
            Permite adicionar, editar, marcar como concluída e excluir tarefas,
            com dados armazenados no navegador para fácil persistência.
          </p>
          <div className="project-card__tags">
            <span className="project-card__tag">HTML5</span>
            <span className="project-card__tag">CSS3</span>
            <span className="project-card__tag">React.js</span>
            <span className="project-card__tag">React Router DOM</span>
            <span className="project-card__tag">React Icons</span>
            <span className="project-card__tag">TypeScript</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-card__image-container">
            <img
              src="./assets/images/thumbnails/motivactionImg.png"
              alt="MotivAction"
              className="project-card__image"
            />
            <div className="project-card__overlay">
              <a
                href="https://motivaction.vercel.app/"
                target="_blank"
                className="project-card__link"
              >
                <i className="fas fa-eye"></i> Ver Projeto
              </a>
              <a
                href="https://github.com/0Carvalh0/motivaction"
                target="_blank"
                className="project-card__link"
              >
                <i className="fab fa-github"></i> Ver Código
              </a>
            </div>
          </div>
          <h3 className="project-card__title">MotivAction</h3>
          <p className="project-card__description">
            MotivAction é um gerador de frases motivacionais criado para
            oferecer uma experiência simples e inspiradora. Com uma interface
            moderna e responsiva, o projeto utiliza APIs para buscar frases
            aleatórias e relevantes, ajudando os usuários a começar o dia com
            motivação e foco.
          </p>
          <div className="project-card__tags">
            <span className="project-card__tag">HTML5</span>
            <span className="project-card__tag">Tailwind CSS</span>
            <span className="project-card__tag">JavaScript</span>
            <span className="project-card__tag">Advice Slip JSON API</span>
            <span className="project-card__tag">MyMemory API</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-card__image-container">
            <img
              src="./assets/images/thumbnails/multicalcImg.png"
              alt="Calculadora"
              className="project-card__image"
            />
            <div className="project-card__overlay">
              <a
                href="https://multicalc-one.vercel.app/"
                target="_blank"
                className="project-card__link"
              >
                <i className="fas fa-eye"></i> Ver Projeto
              </a>
              <a
                href="https://github.com/0Carvalh0/multicalc"
                target="_blank"
                className="project-card__link"
              >
                <i className="fab fa-github"></i> Ver Código
              </a>
            </div>
          </div>
          <h3 className="project-card__title">MultiCalc</h3>
          <p className="project-card__description">
            Uma calculadora versátil e poderosa que realiza diversos tipos de
            cálculos, incluindo matemáticos, financeiros e científicos.
            Interface simples, fácil de usar e ideal para diferentes
            finalidades.
          </p>
          <div className="project-card__tags">
            <span className="project-card__tag">HTML5</span>
            <span className="project-card__tag">SASS</span>
            <span className="project-card__tag">JavaScript</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
