import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../../Assets/LOGO.png";

function HomeNavbar() {
  return (
    <Navbar
      style={{ marginTop: "1px", backgroundColor: "#FFBC42" }}
      expand="lg"
    >
      <Container fluid>
        <Row>
          <Col md={3} className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Nav.Link
                  href="/"
                  className="d-flex align-items-center"
                  style={{
                    border: "2px solid black",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    fontSize: "1.5em",
                    marginLeft: "5px"
                  }}
                >
                  <h3 className="mb-0 mr-3 text-center">Sherehe Garage</h3>

                  <Navbar.Brand href="/" className="mr-3">
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "50px",
                        width: "70px",
                        border: "1px solid dark",
                        borderRadius: "20px"
                      }}
                    />
                  </Navbar.Brand>
                </Nav.Link>
              </div>
            </div>
          </Col>

          <Col md={9} className="mt-2 d-flex">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>

                <Form className="d-flex flex-column flex-sm-row align-items-center">
                  <Form.Control
                    type="search"
                    
                    placeholder="Search events here ...."
                    className="me-2 mb-2 mb-sm-0"
                    aria-label="Search"
                    style={{ width: "340px",borderRadius:"13px",border:"1px solid #72ddf7" }}
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>

                <NavDropdown
                  style={{ marginLeft: "20px" }}
                  title="Account"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item
                    href="/birthday"
                    style={{
                      border: "3px solid white",
                      borderRadius: "10px"
                    }}
                  >
                    <Button variant="warning" style={{ width: "125px" }}>
                      Sign In
                    </Button>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/account">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/events">My Events</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title=" Help ? " id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/birthday">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/wedding">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/anniversary">
                    <Button variant="warning" style={{ width: "125px" }}>
                      Live Chat
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
