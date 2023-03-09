import React from "react";
import GraduationNavbar from "../Graduation/GraduationNavbar";

function GraduationHomePage() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(https://images.unsplash.com/photo-1602153883150-a442f874f839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60)`, // set the background image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <GraduationNavbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <h1 style={{ color: "#F07A3B", fontSize: "4rem" }}>
          Celebrate Your Graduation
        </h1>
        <p
          style={{
            // color: "#616161",
            fontSize: "1.5rem",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          convallis tellus. Nam vel nulla sed mauris euismod tincidunt vel id
          eros. Vestibulum a felis vestibulum, consectetur felis nec, vehicula
          augue. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae;
        </p>
      </div>
    </div>
  );
}

export default GraduationHomePage;
