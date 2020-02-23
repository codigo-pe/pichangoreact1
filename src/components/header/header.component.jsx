import React from "react";
import { useHistory } from 'react-router-dom';

function Header(props) {

  let history = useHistory();

  return (
    <header>
      header
      <button onClick={() => {
        sessionStorage.removeItem("isLogin");
        history.replace("/login")
      }}>logout</button>
    </header>
  )
}

export {
  Header
}