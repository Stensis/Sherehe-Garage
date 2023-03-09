import Nav from "react-bootstrap/Nav";

function GraduationNavbar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="venue">Venue</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/photography">Photography</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/decoration">Decoration</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default GraduationNavbar;
