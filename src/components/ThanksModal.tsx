const ThanksModal = () => {
  return (
    <dialog className="thank-youModal">
      <div className="thank-youModal__container">
        <h1 className="thank-youModal__title">Obrigado pelo seu contato!</h1>
        <p className="thank-youModal__message">
          Sua mensagem foi recebida com sucesso. Entrarei em contato o mais
          breve possível.
        </p>
        <div className="thank-youModal__icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <button className="thank-youModal__button">OK</button>
      </div>
    </dialog>
  );
};

export default ThanksModal;
