import React from "react";
import Map from "./Map";

const Kontakt = () => {
  return (
    <div className="kontakt">
      <div className="kontakt__content">
        <div className="kontakt__leftside">
          <h1 className="kontakt__h1">Kontakt</h1>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">DF Immobilien GmbH</h2>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Adresse:</h2>
            <span className="kontakt__span">91058 Erlangen</span>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Vertreten durch:</h2>
            <span className="kontakt__span">
              Dejan Bogojevic, Geschäftsführer
            </span>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Telefon:</h2>
            <span className="kontakt__span">09131/611581</span>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">E-Mail:</h2>
            <span className="kontakt__span">info@df-immobilien.de</span>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Registereintrag</h2>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Eintragung im Handelsregister</h2>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Registergericht:</h2>
            <span className="kontakt__span">Fürth</span>
          </div>
          <div className="kontakt__holder">
            <h2 className="kontakt__h2">Registernummer:</h2>
            <span className="kontakt__span">HRB XXXXXX</span>
          </div>
        </div>
        <div className="kontakt__map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
