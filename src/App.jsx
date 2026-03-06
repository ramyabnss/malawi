import './index.css'
import { Routes, Route } from "react-router-dom";

// -----------------home------------------------
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import NewsEvents from "./sections/NewsEvents";
import About from "./sections/About";
import FeatureSection from './sections/FeatureSection';
import ServicesSection  from './sections/ServicesSection';
import VideoSection from './sections/VideoSection';
import TabsSection from './sections/TabsSection';
import Events from './sections/Events';
import Footer from "./components/Footer";

// ------------------administration------------------------
import ChancellorMessage from './pages/Administration/ChancellorMessage';
import ProChancellor from './pages/Administration/ProChancellor';
import PresidentOfTheCouncil from './pages/Administration/PresidentOfTheCouncil';
import OurCharter from './pages/Administration/OurCharter';
import UniversityCouncil from './pages/Administration/UniversityCouncil';
import BoardOfStudies from './pages/Administration/BoardOfStudies';
import AdmissionCriteria from './pages/Admission/AdmissionCriteria';
import FeesStructure from './pages/Admission/FeesStructure';
import AvailableScholarships from './pages/Admission/AvailableScholarships';
import ApplyForScholarships from './pages/Admission/ApplyForScholarships';

// ------------------Academics------------------------
import AcademicCalendar from './pages/Academics/AcademicCalendar';
import StudentHandbook from './pages/Academics/StudentHandbook';
import TheSenate from './pages/Academics/TheSenate';

// ------------------University------------------------
import Mangochi from './pages/University/Mangochi';
import Lilongwe from './pages/University/Lilongwe';
import Blantyre from './pages/University/Blantyre';


import ResearchInnovation from './pages/ResearchInnovation';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><NewsEvents /><About /><FeatureSection /><ServicesSection /><VideoSection /><TabsSection /><Events /><Footer /></>} />
 {/* ------------------administration------------------------ */}
        <Route path="/administration/chancellor-message" element={<><ChancellorMessage /><Footer /></>} />
        <Route path="/administration/pro-chancellor" element={<><ProChancellor /><Footer /></>} />
        <Route path="/administration/president-of-the-council" element={<><PresidentOfTheCouncil /><Footer /></>} />
        <Route path="/administration/our-charter" element={<><OurCharter /><Footer /></>} />
        <Route path="/administration/university-council" element={<><UniversityCouncil /><Footer /></>} />
        <Route path="/administration/board-of-studies" element={<><BoardOfStudies /><Footer /></>} />
{/* ------------------Admission------------------------ */}
        <Route path="/admission/admission-criteria" element={<><AdmissionCriteria /><Footer /></>} />
        <Route path="/admission/fees-structure" element={<><FeesStructure /><Footer /></>} />
        <Route path="/admission/available-scholarships" element={<><AvailableScholarships /><Footer /></>} />
        <Route path="/admission/apply-for-scholarships" element={<><ApplyForScholarships /><Footer /></>} />
{/* ------------------Academics------------------------ */}
        <Route path="/academics/academic-calendar" element={<><AcademicCalendar /><Footer /></>} />
        <Route path="/academics/student-handbook" element={<><StudentHandbook /><Footer /></>} />
        <Route path="/academics/the-senate" element={<><TheSenate /><Footer /></>} />
{/* ------------------University------------------------ */}
        <Route path="/university/mangochi" element={<><Mangochi /><Footer /></>} />
        <Route path="/university-life/lilongwe" element={<><Lilongwe /><Footer /></>} />
        <Route path="/university-life/blantyre" element={<><Blantyre /><Footer /></>} />

        <Route path="/research-innovation" element={<><ResearchInnovation /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="*" element={<div className="p-10 text-xl">Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;