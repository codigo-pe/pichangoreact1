import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Games,
  ProductCreate,
  ProductEdit,
  GamesDetail,
} from "./components";

function GamesRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={Games}/>
      <Route path={`${path}/:id`} component={GamesDetail}/>
      {/* <Route path={`${path}/edit`}>
        <ProductEdit />
      </Route>
      <Route path={`${path}/create`}>
        <ProductCreate />
      </Route>
      <Route path={`${path}/detail/:id`}>
        <ProductDetail />
      </Route> */}
    </Switch>
  )
}

export {
  GamesRoutes
}