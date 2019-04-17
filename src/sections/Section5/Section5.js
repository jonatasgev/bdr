import React, { Component } from "react";
import InputMask from "react-input-mask";
import "./Section5.css";

class Section5 extends Component {
  formSubmit(event) {
    event.preventDefault();
    const dialog = document.getElementById("dialog");
    if (dialog.classList.contains("active")) {
      dialog.classList.remove("animate");
      setTimeout(() => {
        dialog.classList.remove("active");
      }, 200);
    } else {
      dialog.classList.add("active");
      setTimeout(() => {
        dialog.classList.add("animate");
      }, 0);
    }
  }

  render() {
    return (
      <div className="section5 gradient">
        <form onSubmit={e => this.formSubmit(e)}>
          <div className="field field-name">
            <label htmlFor="name">*Nome:</label>
            <input
              id="name"
              type="text"
              placeholder="Informe seu nome"
              required
            />
          </div>

          <div className="col col-left">
            <div className="field field-email">
              <label htmlFor="email">*E-mail:</label>
              <input
                id="email"
                type="email"
                placeholder="Informe seu e-mail"
                required
              />
            </div>
          </div>

          <div className="col col-right">
            <div className="field field-phone">
              <label htmlFor="phone">*Telefone:</label>
              <InputMask
                mask="(99) 99999-9999"
                id="phone"
                type="phone"
                placeholder="(__) _____-____"
                required
              />
            </div>
          </div>

          <div className="field field-message">
            <label htmlFor="message">*Mensagem:</label>
            <textarea id="message" placeholder="Escreva aqui" required />
          </div>

          <div className="actions">
            <button type="submit">Enviar</button>
          </div>
        </form>

        <div id="dialog">
          <div>
            <h1>Obrigado!</h1>
            <p>Sua mensagem foi enviada.</p>
            <button onClick={e => this.formSubmit(e)}>Ok</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
