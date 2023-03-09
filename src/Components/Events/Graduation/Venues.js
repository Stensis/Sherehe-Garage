import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function GraduationVenues() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Page heading */}
      <h2 style={{ textAlign: "center", marginTop: "5px" }}>
        Venues{" "}
        <a
          href="/graduationHomePage"
          style={{
            paddingLeft: "15px",
            fontSize: "inherit",
            textDecoration: "none"
          }}
        >
          Go Back
        </a>
      </h2>

      {/* Venue cards */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* Example card 1 */}
        <Col>
          <Card>
            <Card.Title>
              <h4 style={{ textAlign: "center", marginTop: "2px" }}>
                Beach Resort
              </h4>
            </Card.Title>
            <div style={{ height: "250px" }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1458576627435-430ad58ead3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="First slide"
                  />
                </Carousel.Item>
                {/* carousel 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="second slide"
                  />
                </Carousel.Item>
                {/* carousel 3 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1628336707631-68131ca720c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNlbGVicmF0aW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt="third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <Card.Body>
              <Card.Text style={{ textAlign: "center", marginTop: "1px" }}>
                Host your graduation ceremony in the luxurious Beach Resort,
                complete with ocean views and all the amenities you need.
              </Card.Text>
              <ul style={{ textAlign: "center", listStyle: "none" }}>
                <li>
                  <strong>Location:</strong> Coastal Town
                </li>
                <li>
                  <strong>Capacity:</strong> 500 guests
                </li>
                <li>
                  <strong>Price:</strong> $10,000 per day
                </li>
              </ul>
              <Button
                variant="primary"
                style={{ display: "block", margin: "auto" }}
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* card two */}
        <Col>
          <Card>
            <Card.Title>
              <h4 style={{ textAlign: "center", marginTop: "2px" }}>
                Beach Resort
              </h4>
            </Card.Title>
            <div style={{ height: "250px" }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1458576627435-430ad58ead3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="First slide"
                  />
                </Carousel.Item>
                {/* carousel 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="second slide"
                  />
                </Carousel.Item>
                {/* carousel 3 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1628336707631-68131ca720c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNlbGVicmF0aW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt="third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <Card.Body>
              <Card.Text style={{ textAlign: "center", marginTop: "1px" }}>
                Host your graduation ceremony in the luxurious Beach Resort,
                complete with ocean views and all the amenities you need.
              </Card.Text>
              <ul style={{ textAlign: "center", listStyle: "none" }}>
                <li>
                  <strong>Location:</strong> Coastal Town
                </li>
                <li>
                  <strong>Capacity:</strong> 500 guests
                </li>
                <li>
                  <strong>Price:</strong> $10,000 per day
                </li>
              </ul>
              <Button
                variant="primary"
                style={{ display: "block", margin: "auto" }}
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* card 3 */}
        <Col>
          <Card>
            <Card.Title>
              <h4 style={{ textAlign: "center", marginTop: "2px" }}>
                Beach Resort
              </h4>
            </Card.Title>
            <div style={{ height: "250px" }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1458576627435-430ad58ead3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="First slide"
                  />
                </Carousel.Item>
                {/* carousel 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="second slide"
                  />
                </Carousel.Item>
                {/* carousel 3 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1628336707631-68131ca720c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNlbGVicmF0aW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt="third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <Card.Body>
              <Card.Text style={{ textAlign: "center", marginTop: "1px" }}>
                Host your graduation ceremony in the luxurious Beach Resort,
                complete with ocean views and all the amenities you need.
              </Card.Text>
              <ul style={{ textAlign: "center", listStyle: "none" }}>
                <li>
                  <strong>Location:</strong> Coastal Town
                </li>
                <li>
                  <strong>Capacity:</strong> 500 guests
                </li>
                <li>
                  <strong>Price:</strong> $10,000 per day
                </li>
              </ul>
              <Button
                variant="primary"
                style={{ display: "block", margin: "auto" }}
              >
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GraduationVenues;
