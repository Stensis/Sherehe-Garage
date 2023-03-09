import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Venues() {
  return (
    <div>
      <h3>Hello, welcome to our various venues that we have </h3>
      {/* this is where the various venue cards will be displayed */}
      <div>
        <Card className="text-center">
          <Card.Header>Special Graduation</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1599943821034-8cb5c7526922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZHVhdGlvbiUyMHZlbnVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default Venues;
