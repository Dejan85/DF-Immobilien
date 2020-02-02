import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__sometext">
          <h1 className="footer__h1">Ltes talk about</h1>
          <p className="footer__p">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Far far away,
            behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="footer__links">
          <h1 className="footer__h1">Links</h1>
          <ul className="footer__ul">
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="home"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                Home
              </ScrollLink>
            </li>
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="überuns"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                >Über uns
              </ScrollLink>
            </li>
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="unsereLeistungen"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                Unsere Leistungen
              </ScrollLink>
            </li>
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="AktuelleAngebote"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                Aktuelle Angebote
              </ScrollLink>
            </li>
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="immobilienankauf"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                Immobilienankauf
              </ScrollLink>
            </li>
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="referenzen"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                Referenzen
              </ScrollLink>
            </li>
            <li className="footer__li">
              <i className="fas fa-long-arrow-alt-right" />
              <ScrollLink
                className="footer__link"
                to="kontakt"
                spy={true}
                smooth={"true"}
                duration={1500}
                offset={-100}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="footer__kontakt">
          <h1 className="footer__h1">Kontakt</h1>
          <ul className="footer__ul">
            <li className="footer__li">
              <i className="far fa-map" />
              <p> 91058 Erlangen</p>
            </li>
            <li className="footer__li">
              <i className="fas fa-user-tie" />
              <p> Dejan Bogojevic, Geschäftsführer</p>
            </li>
            <li className="footer__li">
              <i className="fas fa-phone  footer__icon" />
              <p>09131/611581</p>
            </li>
            <li className="footer__li">
              <i className="fas fa-envelope footer__icon" />
              <p>info@df-immobilien.de</p>
            </li>
          </ul>
        </div>
        <div className="footer__impressum">
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
      </div>
      <div className="footer__copyright">
        DF Immobilien ©2020 by Dejan Markovic
      </div>
    </div>
  );
};

export default Footer;
