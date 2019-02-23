import React, { Component } from "react";
import Helmet from "react-helmet";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Contact US</h5>
                <p>
                  Email: Please contact us xliu72@buffalo.edu Phone: 4152839557
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Career Page</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Join Team</a>
                  </li>
                  <li>
                    <a href="#!">Seek Career</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">See Team</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Post Question</a>
                  </li>
                  <li>
                    <a href="#!">Seek Question</a>
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
