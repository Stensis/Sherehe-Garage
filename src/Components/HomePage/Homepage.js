import React from "react";
import HomeAdvert from "./Advert/HomeAdvert";
import CarouselPage from "./Banner/CarouselPage";
import FooterPage from "./Footer/FooterPage";
import EventNav from "./Sidebar/EventNav";

function Homepage() {
  return (
    <div
    style={{
      background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-sm-3 col-md-3">
          <EventNav />
        </div>
        <div class="col-sm-6 col-md-6">
          <CarouselPage />
        </div>
        <div class="col-sm-3 col-md-3">
          <HomeAdvert/>
        </div>
      </div>
      <FooterPage />
    </div>
  </div>
  
  );
}

export default Homepage;
