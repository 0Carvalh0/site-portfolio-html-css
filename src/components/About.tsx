const About = () => {
  return (
    <section id="sobre" className="about">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="about__content">
        <div className="about__image-container">
          <div className="about__image-container--brackets">
            <img
              className="about__image"
              src="./assets/images/img01.jpg"
              alt="João Victor"
            />
            <div className="about__image-overlay"></div>
          </div>
        </div>
        <div className="about__text">
          <p className="about__description">
            Sou desenvolvedor front-end em formação, com foco em criar
            interfaces responsivas, acessíveis e otimizadas para performance.
            Tenho experiência prática com HTML, CSS, JavaScript, TypeScript,
            React.js e Tailwind CSS, além de integração com APIs REST e
            versionamento com Git.
          </p>
          <p className="about__description">
            Sou apaixonado por tecnologia, autodidata e movido pela curiosidade
            de entender como as coisas funcionam. Estou sempre buscando
            aprimorar minhas habilidades e transformar ideias em soluções
            funcionais que entregam uma boa experiência ao usuário.
          </p>
          <a
            href="./assets/docs/CVJoao_Carvalho.pdf"
            download
            className="about__cv-button"
          >
            Download CV <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
