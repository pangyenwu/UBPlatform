import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="#"> Hello World</a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
