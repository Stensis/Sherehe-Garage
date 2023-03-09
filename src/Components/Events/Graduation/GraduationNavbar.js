import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function GraduationNavbar() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
      <NavLink
            to="/venue"
            onClick={() => (window.location.href = "/venues")}
          >
            Venues
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
