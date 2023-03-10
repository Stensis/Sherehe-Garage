import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PostPage() {
  return (
    <Container fluid className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={8} xl={6}>
          <Card
            style={{
              backgroundColor: "#e7c6ff",
              border: "1px solid black",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <Card.Title
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Do you want to sell your products on our page?
              </Card.Title>

              <Card.Text style={{ fontSize: "1.2rem", marginBottom: "1.5rem", textAlign: "center" }}>
                We are always looking for new and exciting products to offer to our
                customers. If you have something unique to sell, we want to hear
                from you!
              </Card.Text>

              <Button variant="#e7c6ff" style={{ fontSize: "1.2rem", fontWeight: "bold", backgroundColor: "#e7c6ff" }}>
                Contact Us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
