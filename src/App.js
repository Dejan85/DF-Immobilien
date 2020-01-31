import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Überuns from "./components/layout/überuns/Überuns";
import UnsereLeistungen from "./components/layout/unsereleistungen/UnsereLeistungen";
import Immobilienankauf from "./components/layout/immobilienankauf/Immobilienankauf";
import Referenzen from "./components/layout/referenzen/Referenzen";
import Kontakt from "./components/layout/kontakt/Kontakt";
import Footer from "./components/layout/footer/Footer";
import Impressum from "./components/layout/impressum/Impressum";
import Datenschutz from "./components/layout/datenschutz/Datenschutz";
import LinkNav from "./components/layout/header/LinkNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dfimmobilien">
            <Header />
            <Home />
            <Überuns />
            <UnsereLeistungen />
            <Immobilienankauf />
            {/* <Referenzen /> */}
            <Kontakt />
            <Footer />
          </Route>
          <Route exact path="/dfimmobilien/impressum">
            <LinkNav />
            <Impressum />
          </Route>
          <Route exact path="/dfimmobilien/datenschutz">
            <LinkNav />
            <Datenschutz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
