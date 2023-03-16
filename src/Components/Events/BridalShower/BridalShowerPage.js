import React from "react";

function BridalShowerPage() {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80
      )`,
        backgroundSize: "cover",
        height: "29.5rem"
      }}
    >
      <div class="row">
        <div
          class="col-sm-12"
          style={{
            //   backgroundColor: "#f7dfd4",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "15px"
            
          }}
        >
          {/* <!-- content for first row --> */}
          <h2 style={{color:"whitesmoke"}}>Bridal-Shower Services Availabe</h2>
        </div>
      </div>
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 mb-3 ">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Venue Selection
              </button>
            </div>
            <div class="col-sm-4 mb-3">
              <button type="button" class="btn btn-secondary btn-lg btn-block">
                Catering and Menu Planning
              </button>
            </div>
            <div class="col-sm-4 mb-3">
              <button type="button" class="btn btn-success btn-lg btn-block">
                Entertainment and Games
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-3">
              <button type="button" class="btn btn-danger btn-lg btn-block">
                Photography and Videography
              </button>
            </div>
            <div class="col-sm-4 mb-3">
              <button type="button" class="btn btn-warning btn-lg btn-block">
                Gift Registry and Management
              </button>
            </div>
            <div class="col-sm-4 mb-3">
              <button type="button" class="btn btn-info btn-lg btn-block">
                Event Coordination and Management
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BridalShowerPage;
