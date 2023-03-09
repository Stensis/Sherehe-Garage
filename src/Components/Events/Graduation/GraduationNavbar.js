import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function GraduationNavbar() {
  return (
    <Nav
      className="justify-content-center"
      activeKey="/home"
      style={{
        backgroundColor: "#d7e3fc",
        width: "100%",
        fontSize: "1.5rem",
        borderRadius: "60px",
        border: "solid pink",
        padding: "10px 0",
      }}
    >
      <Nav.Item className="mt-3">
        <NavLink
          className="text-decoration-none"
          to="/venue"
          onClick={() => (window.location.href = "/venues")}
        >
          Venues
        </NavLink>
      </Nav.Item>
      <Nav.Item className="mt-3">
        <NavLink
          className="text-decoration-none"
          style={{ margin: "15px" }}
          to="/photography"
          onClick={() => (window.location.href = "/photography")}
        >
          Photography
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default GraduationNavbar;
