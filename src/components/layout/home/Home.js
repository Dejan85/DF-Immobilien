import React from "react";
import { Link } from "react-router-dom";

// import img1 from "../../../sass/images/1.jpg";
// import img2 from "../../../sass/images/2.jpg";
// import img3 from "../../../sass/images/3.jpg";
// import img4 from "../../../sass/images/4.jpg";
// import img5 from "../../../sass/images/5.jpg";
// import img6 from "../../../sass/images/6.jpg";
// import img7 from "../../../sass/images/7.jpg";
// import img8 from "../../../sass/images/8.jpg";
// import img9 from "../../../sass/images/9.jpg";
import img10 from "../../../sass/images/10.jpg";
import img11 from "../../../sass/images/11.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content" style={{ background: `url(${img10})` }}>
        <div className="home__msg">
          <div className="home__msg--content">
            <h1 className="home__msg--h1">
              Herzlich Willkommen DF Immobilien GmbH
            </h1>
            <h2 className="home__msg--h2">
              Ihr zuverlässiger Partner rund um lhre lmmobilie
            </h2>
            <p className="home__msg--p">
              Mit unserer Kompetenz und 10-jähriger Erfahrung am Erlanger
              lmmobilienmarkt sind wir der richtige Partner in Puncto Neubau,
              Projektentwicklung, Verkauf sowie Vermietung von Wohnräumen
            </p>
            <Link className="home__msg--link" to="/dfimmobilien">
              Weiterlesen
            </Link>
          </div>
        </div>
      </div>
      <div
        className="home__background2"
        style={{ background: `url(${img11})` }}
      />
    </div>
  );
};

export default Home;
