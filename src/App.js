import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import HomeNavbar from "./Components/Navbar/Navbar";
import GraduationHomePage from "../src/Components/Events/Graduation/GraduationHomePage";
import Venues from "./Components/Events/Graduation/Venues";
import PostPage from "./Components/Homepage/PostPage";
import background2 from "../src/Assets/background2.avif";
import Photography from "./Components/Events/Graduation/Photography";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh"
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
      </Routes>
    </div>
  );
}

export default App;
