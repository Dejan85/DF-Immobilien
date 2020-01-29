import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Überuns from "./components/layout/überuns/Überuns";
import Services from "./components/layout/services/Services";
import Offer from "./components/layout/offer/Offer";
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
            <Services />
            <Offer />
            {/* <Referenzen /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
