import Header from "./Header";
import Footer from "./Footer";
import CourseCard from "./CourseCard";
import CourseList from "./CourseList";
import SpeakerList from "./SpeakerList";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CourseList />
        <SpeakerList />
      </main>
      <Footer />
    </>
  );
}
