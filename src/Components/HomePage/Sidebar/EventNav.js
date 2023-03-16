import React from "react";

function EventNav() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <h3 className="text-center mb-3">
        <a
          href="/event"
          className="text-decoration-none"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Our Events
        </a>
      </h3>
      <hr className="mb-2" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button
          style={{
            boxShadow: "0px 2px 4px rgba(2, 4, 10, 45)",
            background: "#FF7C00",
            border: "3px solid #707070",
            borderRadius: "30px",
            margin: "5px",
            fontSize: "22px",
            padding: "6px",
            minWidth: "200px"
          }}
        >
          <a
            href="/graduation"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Graduation
          </a>
        </button>

        <button
          style={{
            boxShadow: "0px 2px 4px rgba(2, 4, 10, 45)",
            background: "#E864FF",
            border: "3px solid #707070",
            borderRadius: "30px",
            margin: "5px",
            fontSize: "22px",
            padding: "6px",
            minWidth: "200px"
          }}
        >
          <a href="/wedding" style={{ color: "#fff", textDecoration: "none" }}>
            Wedding
          </a>
        </button>
        <button
          style={{
            boxShadow: "0px 2px 4px rgba(2, 4, 10, 45)",
            background: "#FF7C00",
            border: "3px solid #707070",
            borderRadius: "30px",
            margin: "5px",
            fontSize: "22px",
            padding: "6px",
            minWidth: "200px"
          }}
        >
          <a href="/birthday" style={{ color: "#fff", textDecoration: "none" }}>
            <i
              className="fas fa-birthday-cake"
              style={{ marginRight: "10px" }}
            ></i>
            Birthday
          </a>
        </button>
        <button
          style={{
            boxShadow: "0px 2px 4px rgba(2, 4, 10, 45)",
            background: "#00F",
            border: "3px solid #707070",
            borderRadius: "30px",
            margin: "5px",
            fontSize: "22px",
            padding: "6px",
            minWidth: "200px"
          }}
        >
          <a href="/burial" style={{ color: "#fff", textDecoration: "none" }}>
            <i
              className="fas fa-burial-cap"
              style={{ marginRight: "10px" }}
            ></i>
            Burial
          </a>
        </button>

        <button
          style={{
            boxShadow: "0px 2px 4px rgba(2, 4, 10, 45)",
            background: "#FF7C00",
            border: "3px solid #707070",
            borderRadius: "30px",
            margin: "5px",
            fontSize: "22px",
            padding: "6px",
            minWidth: "200px"
          }}
        >
          <a href="/birthday" style={{ color: "#fff", textDecoration: "none" }}>
            <i
              className="fas fa-birthday-cake"
              style={{ marginRight: "10px" }}
            ></i>
            Baby showers
          </a>
        </button>

        <button
          style={{
            boxShadow: "0px 2px 4px rgba(2, 4, 10, 45)",
            background: "#E864FF",
            border: "3px solid #707070",
            borderRadius: "30px",
            margin: "5px",
            fontSize: "22px",
            padding: "6px",
            minWidth: "200px"
          }}
        >
          <a
            href="/bridalShower"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Bridal Shower
          </a>
        </button>
      </div>
    </div>
  );
}

export default EventNav;
