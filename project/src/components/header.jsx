import React, { Component } from "react";
import StickyHeader from "react-headroom";

class Header extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            UB Book Platform
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Features
              </a>
              <a className="nav-item nav-link" href="#">
                Report
              </a>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Login
            </button>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Register
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
