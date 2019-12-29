import React from "react";

import img10 from "../../../sass/images/10.jpg";
import img12 from "../../../sass/images/12.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div
          className="about__left"
          // style={{ background: `url(${img12})` }}
        >
          <div className="about__frame" />
          <img src={img12} alt="slika" className="about__img" />
        </div>
        <div className="about__right" style={{ background: `url(${img10})` }}>
          {/* <h1 className="about__h1">Über uns</h1> */}
          <span className="about__span">Geschäftsführer:</span>
          <h1 className="about__h1">Dejan Bogojevic</h1>
          <span className="about__span">
            staatl. geprüfter lmmobilienfachmann
          </span>
          <div className="about__p">
            <p>
              <i className="far fa-calendar-alt"></i> Jahrgang 1978
            </p>
            <p>
              <i className="fas fa-building"></i>geboren und aufgewachsen in
              Erlangen
            </p>
          </div>
          <span className="about__span">Beruflicher Werdegang:</span>
          <div className="about__p">
            <p>Realschule am Europakanal</p>
            <p>FOS Erlangen</p>
            <p>Ausbildung zum Bürokaufmann in der Baubranche</p>
            <p>
              Langjährige Tätigkeit als Projektkaufmann bei einem weltweit
              berühmten Baukonzem
            </p>
            <p>Weiterbildung zum staatlich gepruften lmmobilienfachmann</p>
            <p>Schwerpunkt: Entwicklung und Vermarktung von lmmobilien</p>
            <p>Seit 2007 erfolgreich am Erlanger lmmobilienmarkt tätig</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
