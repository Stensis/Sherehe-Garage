import React from "react";

function MidFooter() {
  return (
    <footer
      className="p-2 text-center text-reset"
      //   style={{ backgroundColor: "black" }}
    >
      <div className="container text-center justify-content-center ">
        <div className=" mt-3">
          <div style={{ marginLeft: "40px" }}>
            <h3 style={{ color: "white" }}>
              <u>Get In Touch</u>
            </h3>
          </div>

          <div>
            {/* <p className="m-5" style={{ color: "#f17a12", fontSize: "20px" }}>
              The blissful environment adds to the premium service of our hotel.{" "}
              <br />
              #Mahali Mzuri
            </p> */}

            <div className="input-group mt-3" style={{ marginLeft: "6px" }}>
              <input
                type="email"
                className="bg-black form-control  border-opacity-75 text-white"
                placeholder="Enter your  Email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                style={{
                  borderColor: "black",
                  borderWidth: "4px",
                  borderStyle: "double",
                  width: "35%"
                }}
              />
              <button
                className="input-group-text my-2 my-sm-0"
                id="basic-addon2"
                type="button"
                style={{
                  backgroundColor: "blue",
                  width: "40%",
                  borderColor: "black",
                  borderWidth: "4px",
                  fontSize: "17px",
                  fontWeight: "bold"
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 text-center mt-5">
        <hr />
        <div className="row gx-5">
          <div className="p-2">
            <p className="text-white">All Right Reserved By @Sherehe Garage</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MidFooter;
