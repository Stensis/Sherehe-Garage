import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PostPage() {
  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{
          marginTop: "30px",
          margin: "17px",
          width: "100%",
          height: "450px",
          backgroundColor: "#ffeedd",
          overflow: "hidden",
          border: "1px solid black",
          borderRadius: "20px"
        }}
      >
        <Card.Body
          style={{
            // marginTop: "5px",
            // height: "1px",
            // border: "1px solid black",
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: "#ffeedd",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Card.Title
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem"
            }}
          >
            Do you want to sell your products on our page?
          </Card.Title>

          <Card.Text style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            We are always looking for new and exciting products to offer to our
            customers. If you have something unique to sell, we want to hear
            from you!
          </Card.Text>
          <Button
            variant="warning"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Contact Us
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostPage;
