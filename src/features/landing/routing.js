import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Landing,  
} from "./components";

function LandingRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Landing}/>
  
    </Switch>
  )
}

export {
  LandingRoutes
}