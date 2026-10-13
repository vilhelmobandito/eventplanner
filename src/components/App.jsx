import Header from "./Header";
import Footer from "./Footer";
import CourseCard from "./CourseCard";
import CourseList from "./CourseList";
import SpeakerList from "./SpeakerList";
import InfoBox from "./InfoBox";
import Panel from "./Panel";
import Notice from "./Notice";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Panel title="Nächste Veranstaltungen">
          <p>Hier erscheinen die nächsten Events</p>
        </Panel>

        <SpeakerList />
        <InfoBox title="Hinweis">
          <p>Bitte beachten Sie die aktuellen Veranstaltungsinformationen.</p>
          <ul>
            <li>Einlass ab 8:30 Uhr</li>
            <li>Beginn um 9:00 Uhr</li>
          </ul>
        </InfoBox>
        <CourseList />
        <Notice type="info">
          <strong>Hinweis:</strong> Die Anmeldung ist ab morgen möglich.
        </Notice>
        <Notice type="warning">
          <p>Für diese Veranstaltung sind nur noch wenige Plätze frei.</p>
        </Notice>
      </main>
      <Footer />
    </>
  );
}
