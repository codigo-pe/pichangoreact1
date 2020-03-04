import React from "react";
import Logo from "../../assets/images/pichango.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./footer.scss";


function Footer(props) {
  return (
    <footer className="footer d-flex justify-content-between">
      <p className="text-xs-center">
        PichanGO - &copy;{new Date().getFullYear()} - All Rights Reserved
      </p>
      <ul className="d-flex">
        <li> <i className="fab fa-facebook-f" /></li>
        <li><i className="fab fa-twitter" /></li>
        <li><i className="fab fa-whatsapp" /></li>
        <li><i className="fab fa-facebook-messenger" /></li>
      </ul>

    </footer>
  )
}

export {
  Footer
}
