import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Navbar
      style={{
        border: "1px solid black",
        fontWeight: " bold",
        borderRadius: "15px",
        width: "250px",
        backgroundColor: "#FFBC42",
        marginTop: "15px",

        lineHeight: 2.3
      }}
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column" style={{ marginLeft: "30px" }}>
          <h3>Events</h3>
          <NavLink
            to="/graduation"
            onClick={() => (window.location.href = "/graduationHomePage")}
          >
            Graduation
          </NavLink>

          <NavLink to="/birthday" activeClassName="active">
            BirthDay
          </NavLink>
          <NavLink to="/wedding" activeClassName="active">
            Wedding
          </NavLink>
          <NavLink to="/burials" activeClassName="active">
            Burials
          </NavLink>
          <NavLink to="/babyshower" activeClassName="active">
            Baby Shower
          </NavLink>
          <NavLink to="/cooperateEvents" activeClassName="active">
            Cooperate Events
          </NavLink>
          <NavLink to="/bridalShower" activeClassName="active">
            Bridal Shower
          </NavLink>
          <NavLink to="/anniversaries" activeClassName="active">
            Anniversary
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
