import React from "react";
import "./main.scss";
function Main(props) {
  const { children } = props;
  return (
    <main className="main">{children}</main>
  )
}

export {
  Main
}