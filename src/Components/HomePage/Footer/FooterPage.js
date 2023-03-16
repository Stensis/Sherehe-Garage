import React from "react";
import EndFooter from "./FooterComponent.js/EndFooter";
import FooterStart from "./FooterComponent.js/FooterStart";
import MidFooter from "./FooterComponent.js/MidFooter";

function FooterPage() {
  return (
    <div className="bg-purple text-white pt-5 pb-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-sm-6 col-md-3">
            <FooterStart />
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <MidFooter />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <EndFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
