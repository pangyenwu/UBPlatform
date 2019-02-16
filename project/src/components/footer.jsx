import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="#"> UB Platform Group</a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
