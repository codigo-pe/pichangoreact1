import React from "react";
import {
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import "./navuser.scss"
function NavUser(props) {
  function handleLogout(e) {
    e.preventDefault()
    console.log("loout!!")
  }

  return (
    <Nav
      className="nav-user"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Link to="/profile">Bienvenido Gustavo</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="#" onClick={handleLogout}>Logout</Link>
      </Nav.Item>
    </Nav>
  )
}

export {
  NavUser
}