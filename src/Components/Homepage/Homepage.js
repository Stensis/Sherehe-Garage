import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PostPage from "./PostPage";

function Homepage() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3}>
          <Sidebar />
        </Col>
        <Col xs={12} md={6}>
          <Carousel
            variant="dark"
            style={{
              marginTop: "20px",
              height: "325px"
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1678294076236-e734ebb87e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="First slide"
              />
               <Carousel.Caption
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
              >
                <h5>First slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://plus.unsplash.com/premium_photo-1676648117781-e671a792226e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Second slide"
              />
              <Carousel.Caption
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
              >
                <h5>second slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1675135531731-609e26ada232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
              <Carousel.Caption
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
              >
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={3}>
          <PostPage />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
