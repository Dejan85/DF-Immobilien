import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();

  // useEffect(() => {
  //   console.log(ref.current.offsetLeft);
  // });

  const activeClassHandler = function() {
    const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];

    refs.forEach(item => {
      return item.current.classList.remove("active");
    });

    this.current.classList.add("active");
  };

  return (
    <ul className="header__nav">
      <li
        className="header__nav--li active"
        ref={ref1}
        onClick={activeClassHandler.bind(ref1)}
      >
        <Link to="/dfimmobilien">Home</Link>
      </li>
      <li
        className="header__nav--li"
        ref={ref2}
        onClick={activeClassHandler.bind(ref2)}
      >
        <Link to="/dfimmobilien/about">Über uns</Link>
      </li>
      <li
        className="header__nav--li"
        ref={ref3}
        onClick={activeClassHandler.bind(ref3)}
      >
        <Link to="/dfimmobilien/services">Unsere Leistungen</Link>
      </li>
      <li
        className="header__nav--li"
        ref={ref4}
        onClick={activeClassHandler.bind(ref4)}
      >
        <Link to="/dfimmobilien">Aktuelle Angebote</Link>
      </li>
      <li
        className="header__nav--li"
        ref={ref5}
        onClick={activeClassHandler.bind(ref5)}
      >
        <Link to="/dfimmobilien/anbieten">Grundstück Anbienten</Link>
      </li>
      <li
        className="header__nav--li"
        ref={ref6}
        onClick={activeClassHandler.bind(ref6)}
      >
        <Link to="/dfimmobilien">Kontakt</Link>
      </li>
      <li
        className="header__nav--li"
        ref={ref7}
        onClick={activeClassHandler.bind(ref7)}
      >
        <Link to="/dfimmobilien">Impressum</Link>
      </li>
    </ul>
  );
};

export default Nav;
