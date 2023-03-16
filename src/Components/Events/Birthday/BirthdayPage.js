import React from "react";
import "../Birthday/Birthday.css";

function BirthdayPage() {
  return (
    <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1616745036869-7c11a4e7450c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80
        )`,
          backgroundSize: "cover",
          height: "30rem"
      
        }}
    //   style={{ backgroundColor: "#B3E4E5", height: "30rem" }}
    >
      <div class="container">
        <div class="row">
          <h1
            style={{
              padding: "20px",
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "15px"
            }}
          >
             BirthDay Services Availabe
          </h1>
        </div>
        <div class="row">
          <div class="button-container">
            <button class="button-planning">Party Planning</button>
            <button class="button-catering">Catering</button>
            <button class="button-venue">Venue Rental</button>
            <button class="button-entertainment">Entertainment</button>
            <button class="button-photography">Photography</button>
            <button class="button-supplies">Party Supplies</button>
            <button class="button-staffing">Event Staffing</button>
            <button class="button-favors">Party Favors</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthdayPage;
