import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../Assets/LOGO.png";

function HomeNavbar() {
  return (
    <Navbar
      style={{ marginTop: "1px", backgroundColor: "#FFBC42" }}
      expand="lg"
    >
      <Container fluid>
        <Nav.Link
          href="/"
          style={{
            border: "2px solid black",
            fontWeight: " bold",
            borderRadius: "5px",
            fontSize: "1.5em",
            marginLeft: "5px",
            marginRight: "20px"
          }}
        >
          Sherehe Garage
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="logo"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "20px",
                height: "50px",
                width: "70px",
                border: "1px solid dark",
                borderRadius: "20px"
              }}
            />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {/* <NavDropdown title="Events" id="navbarScrollingDropdown">
              <NavDropdown.Item
                href="/birthday"
                style={{ border: "3px solid white", borderRadius: "10px" }}
              >
                BirthDay
              </NavDropdown.Item>
              <NavDropdown.Item href="/wedding">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="/anniversary">
                Anniversary
              </NavDropdown.Item>
            </NavDropdown> */}

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search events here ...."
                className="me-2"
                aria-label="Search"
                style={{ width: "400px", marginLeft: "20px" }}
              />
              <Button  variant="outline-info">
                Search
              </Button>
            </Form>

            <NavDropdown style={{ marginLeft:"20px"}} title="Account" id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                href="/birthday"
                style={{border: "3px solid white", borderRadius: "10px" }}
              >
                <Button variant="warning" style={{ width: "125px" }}>
                  Sign In
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
              <NavDropdown.Item href="/events"> My Events</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title=" Help ? " id="navbarScrollingDropdown">
              <NavDropdown.Item
                href="/birthday"
                // style={{ border: "3px solid white", borderRadius: "30px" }}
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/wedding">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/anniversary">
                <Button variant="warning" style={{ width: "125px" }}>
                  Live Chat
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
