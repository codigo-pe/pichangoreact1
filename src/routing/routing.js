import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  FieldsRoutes,
  GamesRoutes,
  AuthRoutes,
  LandingRoutes,
  Landing,
} from "../features";

import {
  PrivateRoute
} from "./private-routing";

function MainRoutes(props) {
  return (
    <Switch>
      <Route path="/landing" component={Landing}/>
      <Route path="/games" component={GamesRoutes}/>
      <Route path="/fields" component={FieldsRoutes}/>
      <Route path="/" component={AuthRoutes}/>
      {/* <PrivateRoute path="/products">
        <ProductRoutes />
      </PrivateRoute>
      <PrivateRoute path="/users">
        <UsersRoutes />
      </PrivateRoute> */}
    </Switch>
  )
}

export { MainRoutes };