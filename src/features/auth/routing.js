import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect
} from "react-router-dom";

import {
  AuthLogin,
  AuthRegisterField,
  AuthRegisterGame,
  AuthRegisterPlayer
} from "./components";

function AuthRoutes() {
  let { path } = useRouteMatch();
  console.log("entra acaaaa!!", path)
  return (
    <Switch>
      <Route exact path={`${path}/login`} component={AuthLogin}/>
      <Route path={`${path}/register`} component={AuthRegisterPlayer}/>
      <Route path={`${path}/register-field`} component={AuthRegisterField}/>
      <Route path={`${path}/register-game`} component={AuthRegisterGame}/>
      {/* <Redirect
        to={{
          pathname: "/login"
        }}
      /> */}
    </Switch>
  )
}

export {
  AuthRoutes
}