import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Überuns from "./components/layout/überuns/Überuns";
import UnsereLeistungen from "./components/layout/unsereleistungen/UnsereLeistungen";
import Immobilienankauf from "./components/layout/immobilienankauf/Immobilienankauf";
import Referenzen from "./components/layout/referenzen/Referenzen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/dfimmobilien">
            <Home />
            <Überuns />
            <UnsereLeistungen />
            <Immobilienankauf />
            {/* <Referenzen /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
