import React from "react";
import Logo from "../../assets/images/pichango.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./footer.scss";

function Footer(props) {
  return (
    <footer className="footer d-flex justify-content-between">
      <p>Todos los derechos reservados | 2020</p>
      <ul className="d-flex">
        <li><FontAwesomeIcon icon={faCoffee} /></li>
        <li><FontAwesomeIcon icon={faCoffee} /></li>
        <li><FontAwesomeIcon icon={faCoffee} /></li>
        <li><FontAwesomeIcon icon={faCoffee} /></li>
      </ul>
    </footer>
  )
}

export {
  Footer
}