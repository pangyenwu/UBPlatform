import React, { Component } from "react";
import Helmet from "react-helmet";

class Footer extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">About UB Platform</h5>
                <p>
                  a online platform for the University at Buffalo students to
                  exchange or sell a school supplies directly.
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Buy</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Policies</a>
                  </li>
                  <li>
                    <a href="#!">Policies</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Sell</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            <p>© 2019 Copyright</p>
            <a href="https://www.google.com/"> xxxxxx.com</a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
