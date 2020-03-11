import React from "react";
import "./register.scss";

class AuthRegisterPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

  }


  componentDidMount() {

  }

  render() {
    return (
      <form className="register" onSubmit={this.handleSubmit}>
        <h1><span class="icon"><i class="fa fa-futbol" aria-hidden="true"></i></span>   Registrate</h1>
        <input  name="Nombre" type="text" placeholder="Nombre" />
        <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
        <input name="Apellido" type="password" placeholder="Apellido" />
        <span class="icon2"><i class="fa fa-user" aria-hidden="true"></i></span>
        <input name="Email" type="text" placeholder="Correo electrónico" />
        <span class="icon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <input name="clave1" type="password" placeholder="Crear contraseña" />
        <span class="icon4"><i class="fa fa-unlock" aria-hidden="true"></i></span>
        <input name="clave2" type="password" placeholder="Confirmar contraseña"/>
        <span class="icon5"><i class="fa fa-unlock" aria-hidden="true"></i></span>
        <button>Enviar</button>
      </form>
    )
  }
}

export {
  AuthRegisterPlayer
}