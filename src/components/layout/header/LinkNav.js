import React from "react";
import { NavLink } from "react-router-dom";

// componnets
import Logo from "./Logo";

const LinkNav = () => {
  return (
    <div className="header">
      <div className="header__content">
        <Logo />
        <ul className="header__nav">
          <li className="header__nav--li" style={{ flex: 1 }}>
            <NavLink exact={true} activeClassName="active" to="/dfimmobilien">
              Home
            </NavLink>
          </li>
          <li className="header__nav--li" style={{ flex: 1 }}>
            <NavLink
              exact={true}
              activeClassName="active"
              to="/dfimmobilien/impressum"
            >
              Impressum
            </NavLink>
          </li>
          <li className="header__nav--li" style={{ flex: 1 }}>
            <NavLink
              exact={true}
              activeClassName="active"
              to="/dfimmobilien/datenschutz"
            >
              Datenschutz
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinkNav;
