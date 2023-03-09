import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function Photography() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <h3>
          Galleries{" "}
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
        </h3>

        <p>We Link potential clients with our professional photographers</p>
      </div>

      {/* container for the cards */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* first card */}
        <Card
          style={{
            margin: "2rem",
            width: "100%",
            maxWidth: "18rem",
            height: "auto"
          }}
        >
          <Card.Title style={{ textAlign: "center", marginTop: "5px" }}>
            Eric studios
          </Card.Title>
          <Card.Body style={{ textAlign: "center", backgroundColor: "gray" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://images.unsplash.com/photo-1521656958087-ed26dfcf5a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYWR1YXRpb24lMjB2ZW51ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="First slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Second slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  variant="top"
                  src="https://images.unsplash.com/photo-1534429068323-d715c5a6d96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Third slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
            </Carousel>
            <Card.Text>
              This is erics work would appreciate if you booked a session with
              him...
            </Card.Text>
            <ul style={{ textAlign: "center", listStyle: "none" }}>
              <li>
                <strong>Location:</strong> Coastal Town
              </li>

              <li>
                <strong>Price:</strong> 200 ksh per photo
              </li>
            </ul>
            <Button variant="primary">Book a Session</Button>
          </Card.Body>
        </Card>

        {/* second card */}
        <Card
          style={{
            margin: "2rem",
            width: "100%",
            maxWidth: "18rem",
            height: "auto"
          }}
        >
          <Card.Title style={{ textAlign: "center", marginTop: "5px" }}>
            Eric studios
          </Card.Title>
          <Card.Body style={{ textAlign: "center", backgroundColor: "gray" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://images.unsplash.com/photo-1521656958087-ed26dfcf5a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYWR1YXRpb24lMjB2ZW51ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="First slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Second slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  variant="top"
                  src="https://images.unsplash.com/photo-1534429068323-d715c5a6d96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Third slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
            </Carousel>
            <Card.Text>
              This is erics work would appreciate if you booked a session with
              him...
            </Card.Text>
            <ul style={{ textAlign: "center", listStyle: "none" }}>
              <li>
                <strong>Location:</strong> Coastal Town
              </li>

              <li>
                <strong>Price:</strong> 200 ksh per photo
              </li>
            </ul>
            <Button variant="primary">Book a Session</Button>
          </Card.Body>
        </Card>

        {/* third card */}

        <Card
          style={{
            margin: "2rem",
            width: "100%",
            maxWidth: "18rem",
            height: "auto"
          }}
        >
          <Card.Title style={{ textAlign: "center", marginTop: "5px" }}>
            Eric studios
          </Card.Title>
          <Card.Body style={{ textAlign: "center", backgroundColor: "gray" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://images.unsplash.com/photo-1521656958087-ed26dfcf5a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYWR1YXRpb24lMjB2ZW51ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="First slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Second slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  variant="top"
                  src="https://images.unsplash.com/photo-1534429068323-d715c5a6d96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Third slide"
                  style={{ maxHeight: "280px", maxWidth: "100%" }}
                />
              </Carousel.Item>
            </Carousel>
            <Card.Text>
              This is erics work would appreciate if you booked a session with
              him...
            </Card.Text>
            <ul style={{ textAlign: "center", listStyle: "none" }}>
              <li>
                <strong>Location:</strong> Coastal Town
              </li>

              <li>
                <strong>Price:</strong> 200 ksh per photo
              </li>
            </ul>
            <Button variant="primary">Book a Session</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Photography;
