import React from "react";

function Main(props) {
  const { children } = props;
  return (
    <main>{children}</main>
  )
}

export {
  Main
}