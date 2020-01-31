import React from "react";
import Map from "./Map";

const Kontakt = () => {
  return (
    <div className="kontakt">
      {/* <h1 className="kontakt__h1">Kontakt</h1> */}
      {/* <p className="kontakt__p">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p> */}
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
