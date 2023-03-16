import React from "react";
// import GraduationCatering from "./../Graduation/GraduationEvents/GraduationCatering";
// import VenueGraduation from "./GraduationEvents/Venue";

function GraduationHome() {
//   const [currentComponent, setCurrentComponent] = useState(null);

//   const handleVenueButtonClick = () => {
//     setCurrentComponent("Venue");
//   };

//   const handleGraduationCateringButtonClick = () => {
//     setCurrentComponent("GraduationCatering");
//   };

  return (
    <div>
      <div style={{ backgroundColor: "#B3E4E5",height:"29.5rem" }}>
        <div class="row">
          <div
            class="col-sm-12"
            style={{
              padding: "20px",
              textAlign: "center",
              marginTop: "10px"
            }}
          >
            {/* <!-- content for first row --> */}
            <h2>Graduation Services</h2>
          </div>
        </div>

        <div class="row">
          <div>
            {/* <!-- content for second row --> */}
            <div
              style={{
                padding: "20px",
                textAlign: "center",
                // marginTop: "10px",
                marginRight: "20px"
              }}
            >
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center"
                  // margin: "15px"
                }}
              >
                <button
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    backgroundColor: "pink",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out",
                    width: "200px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                  // onClick={handleVenueButtonClick}
                >
                  <a className="text-decoration-none text-dark" href="/venue">
                    Venue
                  </a>
                </button>
                <button
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    backgroundColor: "green",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out",
                    width: "200px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                  // onClick={handleGraduationCateringButtonClick}
                >
                  <a className="text-decoration-none text-dark" href="/catering">
                    Catering{" "}
                  </a>
                </button>
                <button
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    backgroundColor: "orange",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out",
                    width: "350px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  Audio-visual equipment rental
                </button>
                <button
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    backgroundColor: "purple",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out",
                    width: "200px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  Decorations
                </button>
                <button
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    backgroundColor: "blue",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out",
                    width: "350px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  Photography and videography
                </button>
                <button
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    backgroundColor: "teal",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  Transportation
                </button>

                <button
                  style={{
                    backgroundColor: "#FF4136",
                    marginRight: "10px",
                    marginBottom: "10px",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  Entertainment
                </button>

                <button
                  style={{
                    backgroundColor: "#3D9970",
                    width: "330px",
                    marginRight: "10px",
                    marginBottom: "10px",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  Event planning and coordination
                </button>

                <button
                  style={{
                    backgroundColor: "#FF851B",
                    marginRight: "10px",
                    marginBottom: "10px",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  Security
                </button>

                <button
                  style={{
                    backgroundColor: "#B10DC9",
                    marginRight: "10px",
                    marginBottom: "10px",
                    border: "4px solid black",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                    color: "#333",
                    padding: "10px 20px",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  Graduation attire
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="row"> */}
          {/* Render the VenueGraduation component when the Venue button is clicked */}
          {/* {currentComponent === "Venue" && <VenueGraduation />}{" "} */}
        {/* </div> */}
        
        {/* <div className="row"> */}
          {/* Render the VenueGraduation component when the Venue button is clicked */}
          {/* {currentComponent === "GraduationCatering" && <GraduationCatering />}{" "} */}
        {/* </div> */}

      </div>
    </div>
  );
}

export default GraduationHome;
