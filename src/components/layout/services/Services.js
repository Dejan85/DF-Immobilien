import React from "react";

//images
import img from "../../../sass/images/23.jpg";
import img2 from "../../../sass/images/24.jpg";
import img3 from "../../../sass/images/25.jpg";
import img4 from "../../../sass/images/26.jpg";

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
import icon10 from "../../../sass/images/icon10.jpg";
import icon11 from "../../../sass/images/icon11.jpg";

const Services = () => {
  return (
    <div className="services">
      <div
        className="services__background"
        style={{ background: `url(${img4})` }}
      >
        <h1 className="services__h1">Unsere Leistungen</h1>
      </div>
      <div className="services__content">
        <div className="services__text">
          <h2 className="services__h2">
            Wohnbau und Projektentwicklung
            <div className="services__line" />
          </h2>
          <div className="services__text--content">
            <div className="services__text--box">
              <h3 className="services__h3">
                <img src={icon10} alt="icon" />
                Neubau
              </h3>
              <p className="services__p">
                Als Bauträger und Generalunternehmer realisieren wir Ein-,
                Doppel-, Reihen-, sowie Mehrfamilienhäuser in Erlangen und
                Umgebung. Sie als Käufer bzw. Bauherr erhalten alle Leistungen
                aus einer Hand zum Festpreis. In Zusamenarbeiten mit unserem
                Architekten organisieren und koordinieren wir sämtliche
                Bauleistungen.  Ein Allround-Paket, das bei jedem Planungs- und
                Bauschritt immer auch unseren hohen Qualitäts- und
                Service-Ansprüchen unterliegt.
              </p>
            </div>
            <div className="services__text--box">
              <h3 className="services__h3">
                <img src={icon11} alt="icon" />
                Projektentwicklung
              </h3>
              <p className="services__p">
                Die Chancen und Möglichkeiten die ein Grundstück oder eine
                Immobilie bietet zu erkennen und diese umzusetzen ist unser
                Anspruch. Wenn es darum geht, neue Projekte zu entwickeln,
                braucht man Weitblick, Kreativität, Marktkenntnis und Erfahrung
                in den Bereichen Planung, Bau und Vermarktung. Unser
                rechtliches, planerisches und immobilienwirtschaftliches Wissen
                verbunden mit sehr guten Markt- und Standortkenntnissen sind ein
                Garant für eine erfolgreiche Projektentwicklung
              </p>
            </div>
            {/* <div className="services__text--box">
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
            </div> */}
          </div>
        </div>
        <div className="services__righttext">
          <h2 className="services__h2">
            Verkauf und Vermietung Ihrer Immobilie
            <div className="services__line" />
          </h2>
          <h4 className="services__h4">
            {/* Wir bieten lhnen eine profesionelle Abwicklung beim Verkauf oder
            Vermietung lhrer lmmobilie. */}
            Sie wollen eine Immobilien verkaufen oder vermieten? Wir bieten
            Ihnen eine profesionelle Abwicklung beim Verkauf oder Vermietung
            Ihrer Immobilie Wir begleiten Sie in allen Schritten
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

          <h3 className="services__h3">
            Mit welchen Kosten müssen Sie als Verkäufer rechnen?
          </h3>
          <p
            className="services__p"
            style={{ color: "white", fontWeight: "300" }}
          >
            Wenn Sie Ihre Immobilie über uns verkaufen, fallen für Sie als
            Immobilieneigentümer keine Kosten an. Alle Erwerbsnebenkosten werden
            vom Käufer getragen. Die Kosten für die Unterlagenrecherche und die
            Marketingaktivitäten übernehmen wir für unsere Kunden. Lediglich die
            Gebühren für eine eventuelle Löschung von eingetragenen
            Grundbuchlasten sind durch den Verkäufer zu tragen.
          </p>
          <p
            className="services__p"
            style={{ color: "white", fontWeight: "300" }}
          >
            Ganz anders sieht es aus, wenn Sie den geplanten Immobilienverkauf
            durchführen würden. In diesem Falle müssten die Kosten für die
            Beschaffung der notwendigen Unterlagen (z.B. Grundbuch,
            Energieausweis, Grundrisse, Baulastenauskunft, etc.) sowie die
            Vermarktung (Immobilienportale, Anzeigen, Fotografen) durch den
            Eigentümer getragen werden. Der zeitliche Aufwand und die
            Verkaufsverhandlungen sind nicht zu unterschätzen.
          </p>

          <h3 className="services__h3">Vermietung</h3>
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
          <h3 className="services__h3">
            Mit welchen Kosten müssen Sie als Vermieter rechnen?
          </h3>
          <p
            className="services__p"
            style={{ color: "white", fontWeight: "300" }}
          >
            Seit 1. Juni 2015 gilt das Bestellerprinzip. Wer den Makler bei
            einer Wohnungsvermietung beauftragt, muss ihn auch bezahlen. Diese
            Regelung gilt jedoch nur für Vermietung von Wohräumen, nicht für
            Gewerberäume. Als Besteller zahlen Sie eine Provision in Höhe von 2
            Kaltmieten zzgl. Mwst an uns.
          </p>

          <p
            className="services__p"
            style={{ color: "white", fontWeight: "300" }}
          >
            Für eine über uns erworbene Immobilie bieten wir Ihnen die
            Erstvermietung unentgeltlich an.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
