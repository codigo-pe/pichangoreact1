import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";


function PrivateRoute(props) {
  let isLogin = sessionStorage.getItem("isLogin");

  const {
    children,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("isLogin", isLogin)
        return (isLogin)
          ? (children)
          : (
            <Redirect to={{
              pathname: "/login"
            }} />
          )
      }}
    />
  )
}

export {
  PrivateRoute
}