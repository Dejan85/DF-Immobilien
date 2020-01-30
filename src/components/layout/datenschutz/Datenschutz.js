import React, { useEffect } from "react";

// hooks
import useResetScroll from "../../hooks/useResetScroll";

const Datenschutz = () => {
  const { resetScroll } = useResetScroll();

  useEffect(() => {
    resetScroll();
  }, [resetScroll]);

  return (
    <div className="datenschutz">
      <h1 className="datenschutz__h1">1. Datenschutz auf einen Blick</h1>
      <h2 className="datenschutz__h2">Allgemeine Hinweise</h2>
      <p className="datenschutz__p">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
        besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
        persönlich identifiziert werden können. Ausführliche Informationen zum
        Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </p>

      <h2 className="datenschutz__h2">Datenerfassung auf unserer Website</h2>
      <h2 className="datenschutz__h2">
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </h2>
      <p className="datenschutz__p">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
        Website entnehmen.
      </p>

      <h2 className="datenschutz__h2">Wie erfassen wir Ihre Daten?</h2>
      <p className="datenschutz__p">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </p>
      <p className="datenschutz__p">
        Andere Daten werden automatisch beim Besuch der Website durch unsere
        IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
        Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
        Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
        betreten.
      </p>

      <h2 className="datenschutz__h2">Wofür nutzen wir Ihre Daten?</h2>
      <p className="datenschutz__p">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>

      <h2 className="datenschutz__h2">
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </h2>
      <p className="datenschutz__p">
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder
        Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
        Thema Datenschutz können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>

      <h1 className="datenschutz__h1">
        2. Allgemeine Hinweise und Pflichtinformationen
      </h1>
      <h2 className="datenschutz__h2">Datenschutz</h2>
      <p className="datenschutz__p">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>
      <p className="datenschutz__p">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p className="datenschutz__p">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>

      <h2 className="datenschutz__h2">Hinweis zur verantwortlichen Stelle</h2>
      <h3 className="datenschutz__h3">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </h3>
      <p className="datenschutz__p">DF Immobilien GmbH</p>
      <p className="datenschutz__p">Dejan Bogojevic, Geschäftsführer</p>
      <p className="datenschutz__p">Steinheilstraße 4</p>
      <p className="datenschutz__p">91058 Erlangen</p>
      <p className="datenschutz__p">Telefon: 09131-611581</p>
      <p className="datenschutz__p">E-Mail: info@df-immobilien.de</p>

      <p className="datenschutz__p">
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
        Ä.) entscheidet.
      </p>

      <h2 className="datenschutz__h2">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </h2>
      <p className="datenschutz__p">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
        uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
        bleibt vom Widerruf unberührt.
      </p>

      <h4 className="datenschutz__h4">
        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
        gegen Direktwerbung (Art. 21 DSGVO) Wenn die Datenverarbeitung auf
        Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
        jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
        Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten
        Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
        gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine
        Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie
        Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen
        Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
        schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
        Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient
        der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
        (Widerspruch nach Art. 21 Abs. 1 DSGVO).
      </h4>

      <h4 className="datenschutz__h4">
        Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
        betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
        Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
        derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
        es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
        widersprechen, werden Ihre personenbezogenen Daten anschließend nicht
        mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21
        Abs. 2 DSGVO).
      </h4>

      <h2 className="datenschutz__h2">
        Beschwerderecht bei der zuständigen Aufsichtsbehörde
      </h2>
      <p className="datenschutz__p">
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </p>

      <h2 className="datenschutz__h2">Recht auf Datenübertragbarkeit</h2>
      <p className="datenschutz__p">
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>

      <h2 className="datenschutz__h2">SSL- bzw. TLS-Verschlüsselung</h2>
      <p className="datenschutz__p">
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>
      <p className="datenschutz__p">
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>

      <h2 className="datenschutz__h2">
        Auskunft, Sperrung, Löschung und Berichtigung
      </h2>
      <p className="datenschutz__p">
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
        Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
        personenbezogene Daten können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden.
      </p>

      <h2 className="datenschutz__h2">
        Recht auf Einschränkung der Verarbeitung
      </h2>
      <p className="datenschutz__p">
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
        Einschränkung der Verarbeitung besteht in folgenden Fällen:
      </p>
      <ul className="datenschutz__ul">
        <li className="datenschutz__li">
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li className="datenschutz__li">
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
        </li>
        <li className="datenschutz__li">
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li className="datenschutz__li">
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </li>
      </ul>

      <p className="datenschutz__p">
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
        natürlichen oder juristischen Person oder aus Gründen eines wichtigen
        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
        verarbeitet werden.
      </p>

      <h2 className="datenschutz__h2">Widerspruch gegen Werbe-E-Mails</h2>
      <p className="datenschutz__p">
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
        Werbung und Informationsmaterialien wird hiermit widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, vor.
      </p>

      <h1 className="datenschutz__h1">
        3. Datenerfassung auf unserer Website Cookies
      </h1>
      <p className="datenschutz__p">
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
        richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
        Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
        sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
        Rechner abgelegt werden und die Ihr Browser speichert.
      </p>
      <p className="datenschutz__p">
        Die meisten der von uns verwendeten Cookies sind so genannte
        „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
        gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie
        diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
        nächsten Besuch wiederzuerkennen.
      </p>
      <p className="datenschutz__p">
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browser
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </p>
      <p className="datenschutz__p">
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs
        oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.
        B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein
        berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit
        andere Cookies (z. B. Cookies zur Analyse Ihres Surfverhaltens)
        gespeichert werden, werden diese in dieser Datenschutzerklärung
        gesondert behandelt.
      </p>
      <h2 className="datenschutz__h2">Server-Log-Dateien</h2>
      <p className="datenschutz__p">
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </p>

      <ul className="datenschutz__ul">
        <li className="datenschutz__li">Browsertyp und Browserversion</li>
        <li className="datenschutz__li">Verwendetes Betriebssystem</li>
        <li className="datenschutz__li">Referrer URL</li>
        <li className="datenschutz__li">Hostname des zugreifenden Rechners</li>
        <li className="datenschutz__li">Uhrzeit der Serveranfrage</li>
        <li className="datenschutz__li">IP-Adresse</li>
      </ul>

      <p className="datenschutz__p">
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </p>

      <p className="datenschutz__p">
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
        f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        technisch fehlerfreien Darstellung und der Optimierung seiner Website –
        hierzu müssen die Server-Log-Files erfasst werden.
      </p>

      <h2 className="datenschutz__h2">Kontaktformular</h2>
      <p className="datenschutz__p">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>
      <p className="datenschutz__p">
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
        somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
        lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu
        reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit
        der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom
        Widerruf unberührt.
      </p>
      <p className="datenschutz__p">
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
        bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>
      <h2 className="datenschutz__h2">
        Anfrage per E-Mail, Telefon oder Telefax
      </h2>
      <p className="datenschutz__p">
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </p>
      <p className="datenschutz__p">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren
        berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
        berechtigtes Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen haben.
      </p>
      <p className="datenschutz__p">
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
        bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
        Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
        gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen
        – bleiben unberührt.
      </p>

      <h1 className="datenschutz__h1">
        4. Analyse-Tools und Werbung Google Analytics
      </h1>
      <p className="datenschutz__p">
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
        Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow
        Street, Dublin 4, Irland.
      </p>
      <p className="datenschutz__p">
        Google Analytics verwendet so genannte „Cookies“. Das sind Textdateien,
        die auf Ihrem Computer gespeichert werden und die eine Analyse der
        Benutzung der Website durch Sie ermöglichen. Die durch den Cookie
        erzeugten Informationen über Ihre Benutzung dieser Website werden in der
        Regel an einen Server von Google in den USA übertragen und dort
        gespeichert.
      </p>
      <p className="datenschutz__p">
        Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses
        Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
        Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
        Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu
        optimieren.
      </p>
      <h2 className="datenschutz__h2">IP Anonymisierung</h2>
      <p className="datenschutz__p">
        Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
        Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
        der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
        über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
        gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
        von Google in den USA übertragen und dort gekürzt. Im Auftrag des
        Betreibers dieser Website wird Google diese Informationen benutzen, um
        Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten zusammenzustellen und um weitere mit der
        Websitenutzung und der Internetnutzung verbundene Dienstleistungen
        gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
        Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
        anderen Daten von Google zusammengeführt.
      </p>
      <h2 className="datenschutz__h2">Browser Plugin</h2>
      <p className="datenschutz__p">
        Sie können die Speicherung der Cookies durch eine entsprechende
        Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
        darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
        Funktionen dieser Website vollumfänglich werden nutzen können. Sie
        können darüber hinaus die Erfassung der durch den Cookie erzeugten und
        auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
        Google sowie die Verarbeitung dieser Daten durch Google verhindern,
        indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
        herunterladen und installieren:
        <a
          className="datenschutz__a"
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
        .
      </p>
      <h2 className="datenschutz__h2">Widerspruch gegen Datenerfassung</h2>
      <p className="datenschutz__p">
        Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern,
        indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
        gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
        Website verhindert: Google Analytics deaktivieren.
      </p>
      <p className="datenschutz__p">
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
        finden Sie in der Datenschutzerklärung von Google:
        <a
          className="datenschutz__a"
          href="https://support.google.com/analytics/answer/6004245?hl=de"
        >
          https://support.google.com/analytics/answer/6004245?hl=de
        </a>
        .
      </p>
      <h2 className="datenschutz__h2">
        Demografische Merkmale bei Google Analytics
      </h2>
      <p className="datenschutz__p">
        Diese Website nutzt die Funktion „demografische Merkmale“ von Google
        Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu
        Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese
        Daten stammen aus interessenbezogener Werbung von Google sowie aus
        Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten
        Person zugeordnet werden. Sie können diese Funktion jederzeit über die
        Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die
        Erfassung Ihrer Daten durch Google Analytics wie im Punkt „Widerspruch
        gegen Datenerfassung“ dargestellt generell untersagen.
      </p>
      <h2 className="datenschutz__h2">Speicherdauer</h2>
      <p className="datenschutz__p">
        Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit
        Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B.
        DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 26
        Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter
        folgendem Link:
        <a
          className="datenschutz__a"
          href="https://support.google.com/analytics/answer/7667196?hl=de"
        >
          https://support.google.com/analytics/answer/7667196?hl=de
        </a>
      </p>

      <h1 className="datenschutz__h1">5. Plugins und Tools Google Web Fonts</h1>
      <p className="datenschutz__p">
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
        genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
        einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
        Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
      </p>
      <p className="datenschutz__p">
        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den
        Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber,
        dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung
        von Google Web Fonts erfolgt im Interesse einer einheitlichen und
        ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein
        berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
      </p>
      <p className="datenschutz__p">
        Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift
        von Ihrem Computer genutzt.
      </p>
      <p className="datenschutz__p">
        Weitere Informationen zu Google Web Fonts finden Sie unter
        <a
          className="datenschutz__a"
          href="https://developers.google.com/fonts/faq"
        >
          https://developers.google.com/fonts/faq
        </a>
        und in der Datenschutzerklärung von Google:{" "}
        <a
          className="datenschutz__a"
          href="https://policies.google.com/privacy?hl=de"
        >
          https://policies.google.com/privacy?hl=de
        </a>
        .
      </p>
    </div>
  );
};

export default Datenschutz;
