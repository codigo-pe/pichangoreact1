import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  FieldsRoutes,
  GamesRoutes,
  AuthRoutes
} from "../features";

import {
  PrivateRoute
} from "./private-routing";

function MainRoutes(props) {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route path="/games" component={GamesRoutes} />
      <Route path="/fields" component={FieldsRoutes} />
    </Switch>
  )
}

export { MainRoutes };