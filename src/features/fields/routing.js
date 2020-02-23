import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Field,
  UserCreate,
  UserEdit,
  FieldDetail
} from "./components";

function FieldsRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Field}/>
      <Route path={`${path}/edit`}>
        <UserEdit />
      </Route>
      <Route path={`${path}/create`}>
        <UserCreate />
      </Route>
      <Route path={`${path}/:id`} component={FieldDetail}/>
    </Switch>
  )
}

export {
  FieldsRoutes
}