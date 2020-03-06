import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

import { AppContext } from "../../context";

import "./navuser.scss";
function NavUser(props) {
  let history = useHistory();
  function handleLogout(value) {
    value.toggleValue(null);
    sessionStorage.removeItem("user");
    history.replace("/auth/login");
  }

  return (
    <AppContext.Consumer>
      {value => (
        <Nav
          className="nav-user"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link to="/profile">Bienvenido {value.user.username}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="#" onClick={() => handleLogout(value)}>
              Logout
            </Link>
          </Nav.Item>
        </Nav>
      )}
    </AppContext.Consumer>
  );
}

export { NavUser };
