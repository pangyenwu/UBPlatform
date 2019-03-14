import React, { Component } from "react";
import StickyHeader from "react-headroom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import AccountPage from "./accountPage";
import Body from "./body";
import Login from "./login";
import Register from "./register";
import axios from "axios";
import BookCardInfo from "./bookCardInfo";

class Header extends Component {
  state = { input: null, user: null, topRight: null };

  componentDidMount() {
    this.setTopRight(
      <React.Fragment>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Login login={this.login} api={this.props.api}/>)}
        >
          Login
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Register login={this.login} api={this.props.api}/>)}
        >
          Register
        </Button>
      </React.Fragment>
    );
  }

  setTopRight = content => {
    this.setState({
      topRight: content
    });
  };

  login = users => {
    if (users == null) {
      this.props.setContent(<Login login={this.login} api={this.props.api}/>);
      return 0;
    }
    this.setState({ user: users });
    this.props.setContent(<AccountPage user={users} api={this.props.api}/>);
    this.setTopRight(
      <Button
        style={{ margin: "5px" }}
        variant="outline-primary"
        onClick={() => this.signOut()}
      >
        Sign Out
      </Button>
    );
    return 1;
  };

  signOut = () => {
    this.props.setContent(<Body api={this.props.api}/>);
    this.setState({ user: null });
    this.setTopRight(
      <React.Fragment>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Login login={this.login} api={this.props.api}/>)}
        >
          Login
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Register login={this.login} api={this.props.api}/>)}
        >
          Register
        </Button>
      </React.Fragment>
    );
  };

  search = obj => {
    axios
      .post(this.props.api+"/search", obj)
      .then(res => {
        this.props.setContent(
          <React.Fragment>
            {res.data.data.map(book => (
              <BookCardInfo key={book._id} bookInfo={book} api={this.props.api} />
            ))}
          </React.Fragment>
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Navbar
        bg="navbar navbar-dark bg-dark"
        expand="lg"
        style={{ marginBottom: 10 }}
      >
        <Navbar.Brand href="#home">
          UB Platform
          <img
            src="https://img.icons8.com/doodle/48/000000/books.png"
            style={{ width: 30 }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#home"
              onSelect={() => {
                this.props.setContent(<Body api={this.props.api}/>);
              }}
            >
              >Home
            </Nav.Link>
            <Nav.Link
              href="#accountPage"
              onSelect={() => {
                this.login(this.state.user);
              }}
            >
              Account
            </Nav.Link>
          </Nav>
          <Form inline>
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={() => {
                  this.search({ course: "CSE" });
                }}
              >
                CSE
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={() => {
                  this.search({ course: "English" });
                }}
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={() => {
                  this.search({ course: "History" });
                }}
              >
                History
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item> */}
            </NavDropdown>
            <input
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={e => {
                this.setState({ input: e.target.value });
              }}
            />
            <Button
              style={{ margin: "5px" }}
              variant="outline-primary"
              onClick={() => {
                this.search({ title: this.state.input });
              }}
            >
              Search
            </Button>
            {this.state.topRight}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
