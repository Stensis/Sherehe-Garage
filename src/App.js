import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import HomeNavbar from "./Components/Navbar/Navbar";
import GraduationHomePage from "../src/Components/Events/Graduation/GraduationHomePage";
import Venues from "./Components/Events/Graduation/Venues";
import PostPage from "./Components/Homepage/PostPage";
import background2 from "../src/Assets/background2.avif";
import Photography from "./Components/Events/Graduation/Photography";
import BirthdayHomepage from "./Components/Events/Birthday/BirthdayHomepage";
import AnniversaryHomepage from "./Components/Events/Anniversary/Anniversary";
import BridalHomepage from "./Components/Events/BridalShowers.js/BridalHomePage";
import WeddingHomepage from "./Components/Events/Wedding/WeddingHomepage";
import CooperateHomepage from "./Components/Events/Cooperate/CooperateHomePage";
import BurialHomepage from "./Components/Events/Burials/BurialHomepage";
import BabyShowerHomepage from "./Components/Events/BabyShower.js/BabyShowerHomePage";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto"
      }}
    >
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* added routes for homepage */}
        <Route path="/postPage" element={<PostPage />} />

        {/* graduation event  routes */}
        <Route path="/graduationHomePage" element={<GraduationHomePage />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/photography" element={<Photography />} />
        {/* birthday routes */}
        <Route path="/birthdayHomePage" element={<BirthdayHomepage />} />
        {/* added anniversary routes */}
        <Route path="/anniversaryHomePage" element={<AnniversaryHomepage />} />

        {/* added bridal showers routes */}
        <Route path="/bridalHomePage" element={<BridalHomepage />} />

        {/* added wedding event routes */}
        <Route path="/weddingHomePage" element={<WeddingHomepage />} />

        {/* added cooperate routes */}
        <Route path="/cooperateHomePage" element={<CooperateHomepage />} />

        {/* added burial routes  */}
        <Route path="/burialsHomePage" element={<BurialHomepage />} />

        {/* added babyshower routes */}
        <Route path="/babyShowerHomePage" element={<BabyShowerHomepage />} />
      </Routes>
    </div>
  );
}

export default App;
