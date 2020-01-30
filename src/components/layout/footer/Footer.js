import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__ul">
        <li className="footer__li">
          <Link to="/dfimmobilien/impressum" className="footer__link">
            Impressum
          </Link>
        </li>
        <li className="footer__li">
          <Link to="/dfimmobilien/datenschutz" className="footer__link">
            Datenschutz
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
