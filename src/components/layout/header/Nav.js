import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="header__nav">
      <li className="header__nav--li">
        <NavLink
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          exact
          to="/dfimmobilien/home"
        >
          Home
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink
          exact
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          to="/dfimmobilien/überuns"
        >
          Über uns
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink
          exact
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          to="/dfimmobilien/unsereleistungen"
        >
          Unsere Leistungen
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink
          exact
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          to="/dfimmobilien/aktuelleangebote"
        >
          Aktuelle Angebote
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink
          exact
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          to="/dfimmobilien/grundstückanbieten"
        >
          Grundstück Anbienten
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink
          exact
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          to="/dfimmobilien/kontakt"
        >
          Kontakt
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink
          exact
          activeStyle={{
            color: "white",
            background: "#4C4F54"
          }}
          to="/dfimmobilien/impressum"
        >
          Impressum
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
