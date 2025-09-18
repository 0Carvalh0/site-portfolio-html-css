const Contact = () => {
  return (
    <section id="contato" className="contact">
      <h2 className="section-title">Entre em Contato</h2>
      <form
        id="contact-form"
        className="contact__form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div className="contact__form-group">
          <label htmlFor="name" className="contact__form-label">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact__form-input"
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email" className="contact__form-label">
            Seu E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact__form-input"
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message" className="contact__form-label">
            Sua Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            className="contact__form-input contact__form-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact__form-submit">
          Enviar Mensagem
        </button>

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          value=""
        />
        <input
          type="hidden"
          name="access_key"
          value="05c51542-5a57-45f4-8402-43b8f0dc0e5d"
        />
        <input
          type="hidden"
          name="redirect"
          value="https://portfoliojoaocarvalho.vercel.app"
        />
      </form>
    </section>
  );
};

export default Contact;
