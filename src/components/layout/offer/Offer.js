import React from "react";

// images
import img from "../../../sass/images/17_mask.jpg";
import img2 from "../../../sass/images/24.jpg";
import img3 from "../../../sass/images/25.jpg";
// import img2 from "../../../sass/images/15_mask.jpg";
// import img3 from "../../../sass/images/17_blur.jpg";
// import img4 from "../../../sass/images/17_blur2.jpg";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__background" style={{ background: `url(${img3})` }}>
        <h1 className="offer__h1">Immobilienkauf</h1>
      </div>
      <div className="offer__content">
        <div className="offer__text">
          <h2 className="offer__h2">
            Sie sind Eigentümer und wollen eine lmmobilie in Erlangen oder
            Umgebung verkaufen?
          </h2>
          <p className="offer__p">
            Wir suchen fortlaufend nach unbebauten oder bebauten Grundstücken
            sowie Sanierungs-und Entwicklungsobjekten.
          </p>
          <p className="offer__p">
            Zu Erweiterung unseres Portfolios erwerben wir selbst Grundstücke,
            Wohn-und Geschäftshäuser sowie unsanierte Altbausunbstanz.
          </p>
          <p className="offer__p">
            Aktuell stehen ca.20 Wohn- und Gewerbeeinheiten in unserem Bestitz.
          </p>
          <h3 className="offer__h3">Wir suchen:</h3>
          <ul className="offer__ul">
            <li className="offer__li">
              <i className="fas fa-check" />
              Unbebaute und bebaute Grundstücke
            </li>
            <li className="offer__li">
              <i className="fas fa-check" />
              Verdichtungsflächen
            </li>
            <li className="offer__li">
              <i className="fas fa-check" />
              Mehrfamilienhäuser
            </li>
            <li className="offer__li">
              <i className="fas fa-check" />
              Altbauten
            </li>
            <li className="offer__li">
              <i className="fas fa-check" />
              Sanierungsobjekte
            </li>
            <li className="offer__li">
              <i className="fas fa-check" />
              Entwicklungsobjekte
            </li>
          </ul>
          <p className="offer__p">Maklerangebote sind erwünscht.</p>
          <p className="offer__p">
            Wir garantieren schnelle Abwicklung mit Bestpreiszahlung.
          </p>
          <p className="offer__p">
            Sie haben erfahren, dass ein Grundstück bzw. lmmobilie verkauft
            werden soll?
          </p>
          <p className="offer__p">
            Wir belohnen lhren Tipp bei Ankauf durch die DF lmmobilien GmbH oder
            beiVerkauf der lmmobilie an Dritte.
          </p>
          <p className="offer__p">
            Auszahlungsvoraussetzung ist der Abschluss eines gültigen
            Notarvertrages.
          </p>
          <p className="offer__p">
            Wenn Sie uns ein Objekt benennen möchten, so füllen Sie bitte unser
            Formular aus.
          </p>
          <p className="offer__p">
            Natürlich können Sie uns auch jederzeit telefonisch unter
            <span className="offer__span"> 0174/3-77-10-89</span> erreichen.
          </p>
          <p className="offer__p">
            Ein persönlicher Gesprächstermin kann jederzeit vereinbart werden
          </p>
        </div>
        <div className="offer__line"></div>
        <form className="offer__form">
          <div className="offer__inputHolder">
            <label className="offer__label">Name :</label>
            <input className="offer__input" />
          </div>
          <div className="offer__inputHolder">
            <label className="offer__label">Adresse :</label>
            <input className="offer__input" />
          </div>
          <div className="offer__inputHolder">
            <label className="offer__label">Telefon :</label>
            <input className="offer__input" />
          </div>
          <div className="offer__inputHolder">
            <label className="offer__label">Email :</label>
            <input className="offer__input" />
          </div>
          <div className="offer__inputHolder">
            <label className="offer__label">Objektadresse :</label>
            <input className="offer__input" />
          </div>
          <div className="offer__inputHolder">
            <label className="offer__label">Nachricht :</label>
            <textarea className="offer__input" rows="30" />
          </div>
          <button className="offer__btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Offer;
