import { Nav, Navbar } from "react-bootstrap";

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
          <Nav.Link href="/graduation">Graduation</Nav.Link>
          <Nav.Link href="/birthday">BirthDay</Nav.Link>
          <Nav.Link href="/wedding">Wedding</Nav.Link>
          <Nav.Link href="/burials">Burials</Nav.Link>
          <Nav.Link href="/babyshower">Baby Shower</Nav.Link>
          <Nav.Link href="/cooperateEvents">Cooperate Events</Nav.Link>
          <Nav.Link href="/bridalShower">Bridal Shower</Nav.Link>
          <Nav.Link href="/anniversaries">Anniversary</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
