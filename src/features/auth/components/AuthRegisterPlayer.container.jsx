import React from "react";

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
      <form onSubmit={this.handleSubmit}>
        <h1>Register Player</h1>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Password" />
        <button>Enviar</button>
      </form>
    )
  }
}

export {
  AuthRegisterPlayer
}