import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = () => {
  const [duration] = useState(1200);

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
          to="unsereLeistungen"
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
          to="AktuelleAngebote"
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
          to="immobilienankauf"
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
          to="kontakt"
          spy={true}
          smooth={"true"}
          duration={duration}
          offset={-100}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
