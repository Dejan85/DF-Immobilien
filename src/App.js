import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import About from "./components/layout/about/About";
import Services from "./components/layout/services/Services";
import Offer from "./components/layout/offer/Offer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/dfimmobilien">
            <Home />
          </Route>
          <Route exact path="/dfimmobilien/about">
            <About />
          </Route>
          <Route exact path="/dfimmobilien/services">
            <Services />
          </Route>
          <Route exact path="/dfimmobilien/anbieten">
            <Offer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
