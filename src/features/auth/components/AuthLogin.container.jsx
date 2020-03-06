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
              username: "ana",
              rol: "1"
            },
            {
              id: 2,
              username: "pepe",
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
        <h1>Login</h1>
        <input
          name="username"
          type="text"
          placeholder="Usuario"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Enviar</button>
      </form>
    );
  }
}

AuthLogin.contextType = AppContext;

export { AuthLogin };
