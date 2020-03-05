import React from "react";
import "./header.scss";
import { NavMain, NavUser } from "../";
import Logo from "../../assets/images/pichango.png"

function Header(props) {
  return (
    <header className="header d-flex align-items-center justify-content-between">
      <div className="header__left">
        <a className="header__logo" href="http://127.0.0.1:5500/landing/index.html">
          <img src={Logo} />
        </a>
        <NavMain />
      </div>
      <NavUser />
    </header>
  )
}

export {
  Header
}