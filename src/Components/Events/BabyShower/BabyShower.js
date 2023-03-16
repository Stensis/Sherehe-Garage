import React from "react";
import "../BabyShower/BabyShower.css";

function BabyShower() {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1523754569648-43ccb845c9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
      )`,
        backgroundSize: "cover",
        height: "32rem"
      }}
    >
      <div>
        <div class="row">
          <div
            class="col-sm-12"
            style={{
              padding: "20px",
              textAlign: "center",
              marginTop: "20px"
            }}
          >
            {/* <!-- content for first row --> */}
            <h2>Baby-Shower Services</h2>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <a
              href="/"
              class="btn btn-primary btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
              style={{width:"400px",marginLeft:"20px"}}
            >
              Venue Selection and Decoration
            </a>
          </div>

          <div class="col">
            <a
              href="/"
              class="btn btn-secondary btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
              style={{width:"300px",marginRight:"15px"}}

            >
              Catering Services
            </a>
          </div>

          <div class="col">
            <a
              href="/"
              class="btn btn-success btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
              style={{width:"450px",marginRight:"10px"}}

            >
              Invitations and RSVP Management
            </a>
          </div>

          <div class="col">
            <a
              href="/"
              class="btn btn-info btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
              style={{width:"450px",marginLeft:"10px"}}

            >
              Entertainment and Activities
            </a>
          </div>

          <div class="col">
            <a
              href="/"
              class="btn btn-warning btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
              style={{width:"450px",marginLeft:"10px"}}

            >
              Photography and Videography
            </a>
          </div>

          <div class="col">
            <a
              href="/"
              class="btn btn-danger btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
            >
              Gifts and Favors
            </a>
          </div>

          <div class="col">
            <a
              href="/"
              class="btn btn-dark btn-lg mb-3 py-3 rounded-pill text-uppercase fw-bold"
              style={{marginLeft:"430px"}}

            >
              Event Coordination and Management
            </a>
          </div>
        </div>

        <h3 style={{ padding: "20px", textAlign: "center",color:"blue" }}>
          Contact us to learn more about our graduation services and how we can
          help make your event a success!
        </h3>
      </div>
    </div>
  );
}

export default BabyShower;
