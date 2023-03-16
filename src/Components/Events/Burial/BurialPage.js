import React from "react";
import '../Burial/Burial.css'

function BurialPage() {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1496483648148-47c686dc86a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80
      )`,
        backgroundSize: "cover",
        height: "32rem"
      }}
    >
      <div class="container">
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
            <h2>Burial Services Offered</h2>
          </div>
        </div>
        <div class="row">
          <div class="button-container">
            <button class="button-casket">Casket Selection</button>
            <button class="button-funeral">Funeral Ceremony</button>
            <button class="button-graveside">Graveside Service</button>
            <button class="button-memorialization">Memorialization</button>
            <button class="button-transportation">Transportation</button>
            <button class="button-documentation">Legal Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurialPage;
