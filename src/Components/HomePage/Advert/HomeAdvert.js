import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeAdvert() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (showPopup) {
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showPopup]);

  function handleSubmit(event) {
    event.preventDefault();
    // code to submit the form goes here
    setShowPopup(true);

    // Navigate to a specific route on successful submission
    navigate("/");
    // alert("Thank you for reaching us! We will get back to you as soon as possible.");
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
      <div className="col-lg-8 col-md-10 col-12">          <div
            className="card"
            style={{
              marginTop: "40px",
              border: "4px solid gray",
              borderRadius: " 30px",
              backgroundColor: "#C86AA4",
            
            }}
          >
            <h3 className="card-title mt-3">
              <strong>Advertise With Us</strong>
              <hr />
            </h3>
            <div className="card-body">
              <p className="card-text" style={{ fontSize: "16px" }}>
                We welcome all businesses and individuals who want to advertise
                their products or services on our website. Fill out the form
                below and we will get back to you as soon as possible with more
                information.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Contact Us
              </button>
            </div>
            {/* <!-- Modal --> */}
            <form>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                  background: "linear-gradient(90deg, #00CFFD 0%, #FEBB00 100%)"
                }}
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title justify-content-center fs-5"
                        id="exampleModalLabel"
                      >
                        Reach Us Here...
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div class="form-group">
                        <label for="name">Location</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Enter your location..."
                        />
                      </div>
                      <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                          class="form-control"
                          id="message"
                          rows="3"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <div
                        class="alert alert-warning mt-3"
                        role="alert"
                        style={{ display: "none" }}
                      >
                        Thank you for reaching us! We will get back to you as
                        soon as possible.
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        class="btn btn-info"
                        onClick={handleSubmit}
                      >
                        <a href="/" class="text-decoration-none text-white">
                          Submit
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdvert;
