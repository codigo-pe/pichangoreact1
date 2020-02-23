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
  return (
    <Switch>
      <Route path={`/login`} component={AuthLogin}/>
      <Route path={`/register`} component={AuthRegisterPlayer}/>
      <Route path={`/register-field`} component={AuthRegisterField}/>
      <Route path={`/register-game`} component={AuthRegisterGame}/>
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