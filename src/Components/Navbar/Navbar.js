import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg justify-content-space-between"
      style={{ backgroundColor: "#8626A6" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/" style={{ color: "#ffffff" }}>
          Sherehe Garage
        </a>

        <div class="d-flex flex-wrap justify-content-center justify-content-md-start">
          <form class="d-flex mt-3" role="search">
            <div class="input-group">
              <input
                class="form-control me-2 border-opacity-75 text-black mt-2"
                type="search"
                placeholder="Search available events here..."
                aria-label="Search"
                style={{ backgroundColor: "#D59BE9", height: "42px" }}
              />
              <button
                class="btn"
                type="submit"
                style={{ backgroundColor: "#F1DEF8" }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div class="d-flex justify-content-space-between">
          <ul
            class="nav me-auto mb-2 mb-lg-0 justify-content-space-between"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "#ffffff" }}
              >
                Home
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#ffffff" }}
              >
                Account
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/"
                    style={{ color: "#000000" }}
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/"
                    style={{ color: "#000000" }}
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item text-decoration-none"
                    href="/"
                    style={{ color: "#000000" }}
                  >
                    My Events
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#ffffff" }}
              >
                Help
              </a>
              <ul class="dropdown-menu dropdown-menu-end text-center">
                <li>
                  <a
                    class="dropdown-item"
                    href="/"
                    style={{ color: "#000000" }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/"
                    style={{ color: "#000000" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "#ffffff" }}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
