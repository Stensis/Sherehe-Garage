import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import HomeNavbar from "./Components/Navbar/Navbar";
import GraduationHomePage from "../src/Components/Events/Graduation/GraduationHomePage";
import Venues from "./Components/Events/Graduation/Venues";
// import ContactPage from "./Components/Contact/ContactPage";
import background2 from "../src/Assets/background2.avif";

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
        <Route path="/graduationHomePage" element={<GraduationHomePage />} />
        <Route path="/venues" element={<Venues />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
