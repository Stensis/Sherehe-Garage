import React from "react";
import GraduationNavbar from "../Graduation/GraduationNavbar";
import Venues from "./Venues";

function GraduationHomePage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <GraduationNavbar />
      <h1>Graduation Page</h1>
      <Venues />
    </div>
  );
}

export default GraduationHomePage;
