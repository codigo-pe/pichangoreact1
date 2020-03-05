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

import { AppContext } from './context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleValue = (value) => {
      this.setState({
        user: value
      })
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      user: JSON.parse(sessionStorage.getItem('user')),
      toggleValue: this.toggleValue,
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <AppContext.Provider value={this.state}>
            <Header />
            <Main>
              <MainRoutes />
            </Main>
            <Footer />
          </AppContext.Provider>
        </Router>
      </div>
    )
  }
}

export {
  App
};
