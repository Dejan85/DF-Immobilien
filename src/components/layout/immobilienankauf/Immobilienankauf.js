import React from "react";

// images
import img from "../../../sass/images/17_mask.jpg";
import img2 from "../../../sass/images/24.jpg";
import img3 from "../../../sass/images/25.jpg";
// import img2 from "../../../sass/images/15_mask.jpg";
// import img3 from "../../../sass/images/17_blur.jpg";
// import img4 from "../../../sass/images/17_blur2.jpg";

const Immobilienankauf = () => {
  return (
    <div className="Immobilienankauf">
      <div
        className="Immobilienankauf__background"
        style={{ background: `url(${img3})` }}
      >
        <h1 className="Immobilienankauf__h1">Immobilienkauf</h1>
      </div>
      <div className="Immobilienankauf__content">
        <div className="Immobilienankauf__text">
          <h2 className="Immobilienankauf__h2">
            Sie sind Eigentümer und wollen eine lmmobilie in Erlangen oder
            Umgebung verkaufen?
          </h2>
          <p className="Immobilienankauf__p">
            Wir suchen fortlaufend nach unbebauten oder bebauten Grundstücken
            sowie Sanierungs-und Entwicklungsobjekten.
          </p>
          <p className="Immobilienankauf__p">
            Zu Erweiterung unseres Portfolios erwerben wir selbst Grundstücke,
            Wohn-und Geschäftshäuser sowie unsanierte Altbausunbstanz.
          </p>
          <p className="Immobilienankauf__p">
            Aktuell stehen ca.20 Wohn- und Gewerbeeinheiten in unserem Bestitz.
          </p>
          <h3 className="Immobilienankauf__h3">Wir suchen:</h3>
          <ul className="Immobilienankauf__ul">
            <li className="Immobilienankauf__li">
              <i className="fas fa-check" />
              Unbebaute und bebaute Grundstücke
            </li>
            <li className="Immobilienankauf__li">
              <i className="fas fa-check" />
              Verdichtungsflächen
            </li>
            <li className="Immobilienankauf__li">
              <i className="fas fa-check" />
              Mehrfamilienhäuser
            </li>
            <li className="Immobilienankauf__li">
              <i className="fas fa-check" />
              Altbauten
            </li>
            <li className="Immobilienankauf__li">
              <i className="fas fa-check" />
              Sanierungsobjekte
            </li>
            <li className="Immobilienankauf__li">
              <i className="fas fa-check" />
              Entwicklungsobjekte
            </li>
          </ul>
          <p className="Immobilienankauf__p">Maklerangebote sind erwünscht.</p>
          <p className="Immobilienankauf__p">
            Wir garantieren schnelle Abwicklung mit Bestpreiszahlung.
          </p>
          <p className="Immobilienankauf__p">
            Sie haben erfahren, dass ein Grundstück bzw. lmmobilie verkauft
            werden soll?
          </p>
          <p className="Immobilienankauf__p">
            Wir belohnen lhren Tipp bei Ankauf durch die DF lmmobilien GmbH oder
            beiVerkauf der lmmobilie an Dritte.
          </p>
          <p className="Immobilienankauf__p">
            Auszahlungsvoraussetzung ist der Abschluss eines gültigen
            Notarvertrages.
          </p>
          <p className="Immobilienankauf__p">
            Wenn Sie uns ein Objekt benennen möchten, so füllen Sie bitte unser
            Formular aus.
          </p>
          <p className="Immobilienankauf__p">
            Natürlich können Sie uns auch jederzeit telefonisch unter
            <span className="Immobilienankauf__span">0174/3-77-10-89</span>
            erreichen.
          </p>
          <p className="Immobilienankauf__p">
            Ein persönlicher Gesprächstermin kann jederzeit vereinbart werden
          </p>
        </div>
        <div className="Immobilienankauf__line"></div>
        <form className="Immobilienankauf__form">
          <div className="Immobilienankauf__inputHolder">
            <label className="Immobilienankauf__label">Name :</label>
            <input className="Immobilienankauf__input" />
          </div>
          <div className="Immobilienankauf__inputHolder">
            <label className="Immobilienankauf__label">Adresse :</label>
            <input className="Immobilienankauf__input" />
          </div>
          <div className="Immobilienankauf__inputHolder">
            <label className="Immobilienankauf__label">Telefon :</label>
            <input className="Immobilienankauf__input" />
          </div>
          <div className="Immobilienankauf__inputHolder">
            <label className="Immobilienankauf__label">Email :</label>
            <input className="Immobilienankauf__input" />
          </div>
          <div className="Immobilienankauf__inputHolder">
            <label className="Immobilienankauf__label">Objektadresse :</label>
            <input className="Immobilienankauf__input" />
          </div>
          <div className="Immobilienankauf__inputHolder">
            <label className="Immobilienankauf__label">Nachricht :</label>
            <textarea className="Immobilienankauf__input" rows="30" />
          </div>
          <button className="Immobilienankauf__btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Immobilienankauf;
