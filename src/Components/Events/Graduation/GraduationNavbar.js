import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function GraduationNavbar() {
  return (
    <Nav
      className="justify-content-center"
      activeKey="/home"
      style={{
        // display: "flex",
        //  justifyContent: "center",
        backgroundColor: "#d7e3fc",
        width: "50%",
        marginLeft: "290px",
        fontSize: "1.5rem",
        // padding: "10px 30px",
        borderRadius: "60px",
        border: "solid pink"
        // cursor: "pointer"
      }}
    >
      <Nav.Item className="mt-3">
        <NavLink to="/venue" onClick={() => (window.location.href = "/venues")}>
          Venues
        </NavLink>
      </Nav.Item>
      <Nav.Item className="mt-3">
        <NavLink
          style={{ margin: "15px" }}
          to="/photography"
          onClick={() => (window.location.href = "/photography")}
        >
          Photography
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link exact to="/">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/graduation">Graduation</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default GraduationNavbar;
