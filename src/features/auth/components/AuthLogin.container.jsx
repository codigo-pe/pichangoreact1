import React from "react";
import "./login.scss";
import { AppContext } from "../../../context";
class AuthLogin extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const isLogin = () => {
      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          let users = [
            {
              id: 1,
              username: "eduardo",
              rol: "1"
            },
            {
              id: 2,
              username: "gustavo",
              rol: "2"
            },
            {
              id: 3,
              username: "luis",
              rol: "3"
            }
          ];
          const user = users.filter(
            user => user.username == this.state.username
          )[0];
          resolve(user);
        }, 1000);
      });
    };

    // llamada asincrona al servidor
    isLogin()
      .then(user => {
        this.context.toggleValue(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("/games");
      })
      .catch(function(err) {
        alert("Tu contraseña es incorrecta");
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    if (sessionStorage.getItem("isLogin")) {
      this.props.history.replace("/products");
    }
  }

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h1><span class="icon"><i class="fa fa-futbol" aria-hidden="true"></i></span>  Iniciar Sesión</h1>
        <input
          name="username"
          type="text"
          placeholder="Correo electrónico"
          value={this.state.username}
          onChange={this.handleChange}
        /><span class="icon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <input name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        /><span class="icon5"><i class="fa fa-unlock" aria-hidden="true"></i></span>
        <button>Enviar</button>
      </form>
    );
  }
}

AuthLogin.contextType = AppContext;

export { AuthLogin };
