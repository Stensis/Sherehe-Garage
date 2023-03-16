import React from "react";

function VenueGraduation() {
  return (
    <div class=" " style={{ backgroundColor: "#B3E4E5" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>
          Graduation Venues
        </div>
        <a href="/graduation" style={{ textDecoration: "none" }}>
          <span style={{ marginRight: "10px", cursor: "pointer" }}>
            Go Back <span>⬅️</span>
          </span>
        </a>
      </div>

      <div
        class="row align-items-start m-3 justify-content-between"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          {" "}
          <div
            class="card"
          >
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              class="card-img-top"
              alt="Venue 1"
            />
            <div class="card-body mx-auto my-3 text-center">
              <h5 class="card-title">Venue 1</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vestibulum urna vel nisi euismod interdum. Nulla lobortis
                bibendum dolor sed consectetur.
              </p>
              <a href="/" class="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          {" "}
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              class="card-img-top"
              alt="Venue 2"
            />
            <div class="card-body mx-auto my-3 text-center">
              <h5 class="card-title">Venue 2</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vestibulum urna vel nisi euismod interdum. Nulla lobortis
                bibendum dolor sed consectetur.
              </p>
              <a href="/" class="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          {" "}
          <div class="card" >
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              class="card-img-top"
              alt="Venue 3"
            />
            <div class="card-body mx-auto my-3 text-center">
              <h5 class="card-title">Venue 3</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vestibulum urna vel nisi euismod interdum. Nulla lobortis
                bibendum dolor sed consectetur.
              </p>
              <a href="/" class="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueGraduation;
