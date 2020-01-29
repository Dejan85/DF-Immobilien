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
    <div className="immobilienankauf">
      <div
        className="immobilienankauf__background"
        style={{ background: `url(${img3})` }}
      >
        <h1 className="immobilienankauf__h1">Immobilienkauf</h1>
      </div>
      <div className="immobilienankauf__content">
        <div className="immobilienankauf__text">
          <h2 className="immobilienankauf__h2">
            Sie sind Eigentümer und wollen eine lmmobilie in Erlangen oder
            Umgebung verkaufen?
          </h2>
          <p className="immobilienankauf__p">
            Wir suchen fortlaufend nach unbebauten oder bebauten Grundstücken
            sowie Sanierungs-und Entwicklungsobjekten.
          </p>
          <p className="immobilienankauf__p">
            Zu Erweiterung unseres Portfolios erwerben wir selbst Grundstücke,
            Wohn-und Geschäftshäuser sowie unsanierte Altbausunbstanz.
          </p>
          <p className="immobilienankauf__p">
            Aktuell stehen ca.20 Wohn- und Gewerbeeinheiten in unserem Bestitz.
          </p>
          <h3 className="immobilienankauf__h3">Wir suchen:</h3>
          <ul className="immobilienankauf__ul">
            <li className="immobilienankauf__li">
              <i className="fas fa-check" />
              Unbebaute und bebaute Grundstücke
            </li>
            <li className="immobilienankauf__li">
              <i className="fas fa-check" />
              Verdichtungsflächen
            </li>
            <li className="immobilienankauf__li">
              <i className="fas fa-check" />
              Mehrfamilienhäuser
            </li>
            <li className="immobilienankauf__li">
              <i className="fas fa-check" />
              Altbauten
            </li>
            <li className="immobilienankauf__li">
              <i className="fas fa-check" />
              Sanierungsobjekte
            </li>
            <li className="immobilienankauf__li">
              <i className="fas fa-check" />
              Entwicklungsobjekte
            </li>
          </ul>
          <p className="immobilienankauf__p">Maklerangebote sind erwünscht.</p>
          <p className="immobilienankauf__p">
            Wir garantieren schnelle Abwicklung mit Bestpreiszahlung.
          </p>
          <p className="immobilienankauf__p">
            Sie haben erfahren, dass ein Grundstück bzw. lmmobilie verkauft
            werden soll?
          </p>
          <p className="immobilienankauf__p">
            Wir belohnen lhren Tipp bei Ankauf durch die DF lmmobilien GmbH oder
            beiVerkauf der lmmobilie an Dritte.
          </p>
          <p className="immobilienankauf__p">
            Auszahlungsvoraussetzung ist der Abschluss eines gültigen
            Notarvertrages.
          </p>
          <p className="immobilienankauf__p">
            Wenn Sie uns ein Objekt benennen möchten, so füllen Sie bitte unser
            Formular aus.
          </p>
          <p className="immobilienankauf__p">
            Natürlich können Sie uns auch jederzeit telefonisch unter
            <span className="immobilienankauf__span">0174/3-77-10-89</span>
            erreichen.
          </p>
          <p className="immobilienankauf__p">
            Ein persönlicher Gesprächstermin kann jederzeit vereinbart werden
          </p>
        </div>
        <div className="immobilienankauf__line"></div>
        <form className="immobilienankauf__form">
          <div className="immobilienankauf__inputHolder">
            <label className="immobilienankauf__label">Name :</label>
            <input className="immobilienankauf__input" />
          </div>
          <div className="immobilienankauf__inputHolder">
            <label className="immobilienankauf__label">Adresse :</label>
            <input className="immobilienankauf__input" />
          </div>
          <div className="immobilienankauf__inputHolder">
            <label className="immobilienankauf__label">Telefon :</label>
            <input className="immobilienankauf__input" />
          </div>
          <div className="immobilienankauf__inputHolder">
            <label className="immobilienankauf__label">Email :</label>
            <input className="immobilienankauf__input" />
          </div>
          <div className="immobilienankauf__inputHolder">
            <label className="immobilienankauf__label">Objektadresse :</label>
            <input className="immobilienankauf__input" />
          </div>
          <div className="immobilienankauf__inputHolder">
            <label className="immobilienankauf__label">Nachricht :</label>
            <textarea className="immobilienankauf__input" rows="30" />
          </div>
          <button className="immobilienankauf__btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Immobilienankauf;
