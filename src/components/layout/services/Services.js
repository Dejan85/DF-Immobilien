import React from "react";

//images
import img from "../../../sass/images/23.jpg";
import img2 from "../../../sass/images/24.jpg";

//icon
import icon from "../../../sass/images/icon.jpg";
import icon2 from "../../../sass/images/icon2.jpg";
import icon3 from "../../../sass/images/icon3.jpg";
import icon4 from "../../../sass/images/icon4.jpg";
import icon5 from "../../../sass/images/icon5.jpg";
import icon6 from "../../../sass/images/icon6.jpg";
import icon7 from "../../../sass/images/icon7.jpg";
import icon8 from "../../../sass/images/icon8.jpg";
import icon9 from "../../../sass/images/icon9.jpg";

const Services = () => {
  return (
    <div className="services">
      <div
        className="services__background"
        style={{ background: `url(${img2})` }}
      >
        <h1 className="services__h1">Unsere Leistungen</h1>
      </div>
      <div className="services__content">
        <div className="services__text">
          <h2 className="services__h2">
            DIF Wohnbau Gmbh
            <div className="services__line" />
          </h2>
          <div className="services__text--content">
            <div className="services__text--box">
              <h3 className="services__h3">
                <img src={icon5} alt="icon" />
                Neubau
              </h3>
              <p className="services__p">
                Als Bauträger realisieren wir Ein-, Doppel-, Reihen-, sowie
                Mehrfamilienhäuser Als Käufer erhalten Sie alle Leistungen aus
                einer Hand. ln Zusamenarbeiten mit unserem Architekten
                organisieren und koordinieren wjr sämtliche Bauleistungen.
              </p>
            </div>
            <div className="services__text--box">
              <h3 className="services__h3">
                <img src={icon} alt="icon" />
                Projektentwicklung
              </h3>
              <p className="services__p">
                Die Chancen und Möglichkeiten die ein Grundstück oder eine
                lmmobilie bietet zu erkennen und diese umzuseEen ist
                unserAnspruch.
              </p>
            </div>
            <div className="services__text--box">
              <h3 className="services__h3">
                <img src={icon6} alt="icon" />
                Ankauf
              </h3>
              <p className="services__p">
                Wir erwerben Grundsiücke für die Neubebauung, Wohn- und
                Geschäftshäuser, sowie unsanierte Altbausubstanz zur Erweiterung
                unseres lmmobilienbestandes. Aktuell stehen oa. 20 Wohn- und
                Gewerbeeinheiten in unserem Besiiz.
              </p>
            </div>
            <div className="services__text--box">
              <h3 className="services__h3">
                <img src={icon4} alt="icon" />
                Referenzen
              </h3>
              <p className="services__p">
                Neubau eines Einfam ilienhauses in Herzogenaurach Renovierung
                und Vermietung Wohn- und Geschäftshaus in Erlangen Sanierung und
                Vermietung Appartementhaus in Erlangen
              </p>
            </div>
          </div>
        </div>
        <div className="services__righttext">
          <h2 className="services__h2">
            DIF Immobilienservice
            <div className="services__line" />
          </h2>
          <h4 className="services__h4">
            Wir bieten lhnen eine profesionelle Abwicklung beim Verkauf oder
            Vermietung lhrer lmmobilie.
          </h4>

          <h3 className="services__h3">Verkauf</h3>
          <ul className="services__ul">
            <li className="services__li">
              <i className="fas fa-check" />
              Erstbesichtigung lhrer lmmobilie
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Auswertung und Zusammenstellung der Objektuntedagen
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Umfangreiche Markt- und Kaufpreisanalyse
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Erstellung eines profesionellen Expos6s
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Anfragenmanagement
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Objektbesichtigungen auch an Wochenenden und Feiertagen
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Unterstützung der Kaufinteressenten bei der Finanzierung
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Einholung der Kaufzusage und Finanzierungsbestätigung
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Vorbereitung des Kaufuertrages mit dem Notar
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Begleitung beim Notar
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Objektübergabe
            </li>
          </ul>
          <h3 className="services__h3">Ankauf</h3>
          <ul className="services__ul">
            <li className="services__li">
              <i className="fas fa-check" />
              Erstbesichtigung lhrer lmmobilie
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Auswertung und Zusammenstellung der Objektunterlagen
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Umfangreiche Markt- und Kaufpreisanalyse
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Erstellung eines profesionellen Expos6s
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Anfragenmanagement
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Vorauswahl von lnteressenten einschl. Bonitätsprüfung
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Objektbesichtigungen auch an Wochenenden und Feiertagen
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Kennenlerntermin mit dem Mieter auf Wunsch
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Erstellung eines Mietvertrages nach aktueller Gesetzesordnung
              sowie Wünschen des Vermieters
            </li>
            <li className="services__li">
              <i className="fas fa-check" />
              Objektübergabe mit Erstellung eines Übergabeprotokolls
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
