import React from "react";
import { Routes, Route } from "react-router-dom";
import BabyShower from "./Components/Events/BabyShower/BabyShower";
import BirthdayPage from "./Components/Events/Birthday/BirthdayPage";
import BridalShowerPage from "./Components/Events/BridalShower/BridalShowerPage";
import BurialPage from "./Components/Events/Burial/BurialPage";
import GraduationCatering from "./Components/Events/Graduation/GraduationEvents/GraduationCatering";
import VenueGraduation from "./Components/Events/Graduation/GraduationEvents/Venue";
import GraduationHome from "./Components/Events/Graduation/GraduationHome";
import WeddingPage from "./Components/Events/Wedding/WeddingPage";
import Cakes from "./Components/Events/Wedding/wedding_events/Cakes";
import HomeAdvert from "./Components/HomePage/Advert/HomeAdvert";
import CarouselPage from "./Components/HomePage/Banner/CarouselPage";
import EndFooter from "./Components/HomePage/Footer/FooterComponent.js/EndFooter";
import FooterStart from "./Components/HomePage/Footer/FooterComponent.js/FooterStart";
import MidFooter from "./Components/HomePage/Footer/FooterComponent.js/MidFooter";
import FooterPage from "./Components/HomePage/Footer/FooterPage";
import Homepage from "./Components/HomePage/Homepage";
import EventNav from "./Components/HomePage/Sidebar/EventNav";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Your content goes here */}
        <Route path="/advert" element={<HomeAdvert />} />
        {/* <Route path="/carousel" element={<Carousel />} /> */}
        <Route path="/event" element={<EventNav />} />
        <Route path="/carousel" element={<CarouselPage />} />

        {/* graduation */}
        <Route path="/graduation" element={<GraduationHome />} />
        <Route path="/venue" element={<VenueGraduation />} />
        <Route path="/catering" element={<GraduationCatering />} />


        {/* WEDDING PAGE */}
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/cake" element={<Cakes />} />

        {/* babyshower */}
        <Route path="/babyShower" element={<BabyShower />} />

        {/* BIRTHDAY */}
        <Route path="/birthday" element={<BirthdayPage />} />

        {/* bridal shower */}
        <Route path="/bridalShower" element={<BridalShowerPage />} />

        {/* burial */}
        <Route path="/burial" element={<BurialPage />} />

        {/* footer */}
        <Route path="/footerpage" element={<FooterPage />} />
        <Route path="/footerstart" element={<FooterStart />} />
        <Route path="/midfooter" element={<MidFooter />} />
        <Route path="/endfooter" element={<EndFooter />} />
      </Routes>
    </div>
  );
}

export default App;
