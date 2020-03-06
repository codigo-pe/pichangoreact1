import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { NavMain, NavUser } from "../";
import Logo from "../../assets/images/pichango.png";
import { AppContext } from "../../context";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    console.log("this.context.user", this.context.user);
    return (
      <header className="header d-flex align-items-center justify-content-between">
        <div className="header__left">
          <a className="header__logo" href="">
            <img src={Logo} />
          </a>
          {this.context.user ? <NavMain /> : ""}
        </div>
        <div className="header__right">
          {this.context.user ? (
            <NavUser />
          ) : (
            <>
              {/* <Link to="/auth/register">Registrarse</Link>&nbsp;&nbsp;&nbsp; */}
              <Link to="/auth/login">Loguearse</Link>
            </>
          )}
        </div>
      </header>
    );
  }
}

Header.contextType = AppContext;

export { Header };
