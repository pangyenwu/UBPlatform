import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            UB Book Platform
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Features
              </a>
              <a class="nav-item nav-link" href="#">
                Pricing
              </a>

              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
