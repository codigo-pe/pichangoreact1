import React from 'react';
import { MainRoutes } from "./routing/routing";
import {
  HashRouter as Router
} from "react-router-dom";
import {
  Header,
  Main,
  Footer
} from "./components";

import "./assets/styles/main.scss";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Main>
          <MainRoutes />
        </Main>
        <Footer />
      </Router>
    </div>
  )
}

export {
  App
};
