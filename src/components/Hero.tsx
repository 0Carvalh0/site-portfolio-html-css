const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <h1 className="hero__title">João Victor Carvalho</h1>
      <h2 className="hero__subtitle">Desenvolvedor Front-end</h2>
      <div className="hero__typing">
        <span id="typing-text" className="hero__typing-text"></span>
      </div>
      <a href="#contato" className="hero__cta-button">
        Entre em Contato
      </a>
    </section>
  );
};

export default Hero;
