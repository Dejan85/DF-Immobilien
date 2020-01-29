import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = () => {
  const [duration, setDuration] = useState(1200);

  console.log(duration);

  return (
    <ul className="header__nav">
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={-100}
        >
          Home
        </Link>
      </li>
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="überuns"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={-100}
        >
          Über uns
        </Link>
      </li>
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="UnsereLeistungen"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={-100}
        >
          Unsere Leistungen
        </Link>
      </li>
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="/dfimmobilien"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={0}
        >
          Aktuelle Angebote
        </Link>
      </li>
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="Immobilienankauf"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={-100}
        >
          Immobilienankauf
        </Link>
      </li>
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="referenzen"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={-100}
        >
          Referenzen
        </Link>
      </li>
      <li className="header__nav--li">
        <Link
          activeClass="active"
          to="/dfimmobilien"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={0}
        >
          Impressum
        </Link>
      </li>

      {/* <li className="header__nav--li">
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
      </li> */}
    </ul>
  );
};

export default Nav;
