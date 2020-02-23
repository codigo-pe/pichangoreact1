import React from "react";

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    console.log("login")
  }

  handleSubmit(event) {
    event.preventDefault();

    let isLogin = function () {
      return new Promise((resolve, reject) => {
        return setTimeout(function () {
          resolve(true)
        }, 1000)
      })
    }

    isLogin().then((isLogin) => {
      sessionStorage.setItem("isLogin", isLogin)
      this.props.history.replace("/products");
    }).catch(function (err) {
      alert("Tu contraseña es incorrecta")
    })
  }


  componentDidMount() {
    if (sessionStorage.getItem("isLogin")) {
      this.props.history.replace("/products");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Password" />
        <button>Enviar</button>
      </form>
    )
  }
}

export {
  AuthLogin
}