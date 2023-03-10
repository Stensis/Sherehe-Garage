import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Navbar
      style={{
        border: "1px solid black",
        fontWeight: "bold",
        borderRadius: "15px",
        backgroundColor: "#e7c6ff",
        marginTop: "15px",
        lineHeight: 1.6
      }}
      expand="lg"
      className="d-flex flex-column flex-lg-row flex-nowrap"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            marginLeft: "50px",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <h3
            style={{ textDecoration: "underline", textAlign: "center" }}
            className="me-lg-auto mb-3 pb-3"
          >
            Events
          </h3>
          <NavLink
            to="/graduation"
            onClick={() => (window.location.href = "/graduationHomePage")}
            className="nav-link"
          >
            Graduation
          </NavLink>
          <NavLink
            to="/birthday"
            onClick={() => (window.location.href = "/birthdayHomePage")}
            className="nav-link"
          >
            BirthDay
          </NavLink>
          <NavLink
            to="/wedding"
            onClick={() => (window.location.href = "/weddingHomePage")}
            className="nav-link"
          >
            Wedding
          </NavLink>
          <NavLink
            to="/burials"
            onClick={() => (window.location.href = "/burialsHomePage")}
            className="nav-link"
          >
            Burials
          </NavLink>
          <NavLink
            to="/babyshower"
            onClick={() => (window.location.href = "/babyShowerHomePage")}
            className="nav-link"
          >
            Baby Shower
          </NavLink>
          <NavLink
            to="/cooperate"
            onClick={() => (window.location.href = "/cooperateHomePage")}
            className="nav-link"
          >
            Cooperate Events
          </NavLink>
          <NavLink
            to="/bridalShower"
            onClick={() => (window.location.href = "/bridalHomePage")}
            className="nav-link"
          >
            Bridal Shower
          </NavLink>
          <NavLink
            to="/anniversaries"
            onClick={() => (window.location.href = "/anniversaryHomePage")}
            className="nav-link"
          >
            Anniversary
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
