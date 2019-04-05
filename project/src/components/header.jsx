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
import InterestsPage from "./interestsPage";
import { setTimeout } from "timers";

class Header extends Component {
  state = {
    input: null,
    user: null,
    topRight: null,
    randomBook: [],
    currInterests: []
  };

  componentDidMount() {
    this.setTopRight(
      <React.Fragment>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Login login={this.login} />)}
        >
          Login
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Register login={this.login} />)}
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
      this.props.setContent(<Login login={this.login} />);
      return 0;
    }
    this.setState({ user: users, currInterests: users.interestsList });
    this.randomBook();
    this.props.setContent(
      <AccountPage
        user={users}
        updateInter={this.updateInter}
        randomBook={this.randomBook}
      />
    );
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
    this.props.setContent(<Body />);
    this.setState({ user: null });
    this.setTopRight(
      <React.Fragment>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Login login={this.login} />)}
        >
          Login
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="outline-primary"
          onClick={() => this.props.setContent(<Register login={this.login} />)}
        >
          Register
        </Button>
      </React.Fragment>
    );
  };

  search = obj => {
    axios
      .post("http://localhost:3001/api/search", obj)
      .then(res => {
        this.props.setContent(
          <React.Fragment>
            {res.data.data.map(book => (
              <BookCardInfo key={book._id} bookInfo={book} />
            ))}
          </React.Fragment>
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  //display random books using current user interests
  randomBook = () => {
    if (this.state.user == null) {
      console.log("did not find user.");
      return false; //error?
    } else {
      let interList = this.state.currInterests;
      let localRandomBook = [];
      let localTime = 0;
      for (let i = 0; i < interList.length; i++) {
        setTimeout(function() {
          axios
            .post("http://localhost:3001/api/search", { course: interList[i] })
            .then(res => {
              console.log("loop add random books round: " + i);
              console.log("the res data length: " + res.data.data.length);
              localTime = res.data.data.length;
              if (res.data.data.legnth == 0) {
                console.log(
                  "this is when data is empty. should not get this because this error will be catched"
                );
              } else if (res.data.data.legnth == 1) {
                console.log(
                  "TEST HISTORY COURSE: should see this message because there is only one book of History"
                );
                localRandomBook.push(res.data.data[0]);
              } else {
                let random1 = Math.floor(
                  Math.random() * Math.floor(res.data.data.length)
                );
                let random2 = Math.floor(
                  Math.random() * Math.floor(res.data.data.length)
                );
                while (random2 == random1) {
                  random2 = Math.floor(
                    Math.random() * Math.floor(res.data.data.length)
                  );
                }
                localRandomBook.push(res.data.data[random1]);
                localRandomBook.push(res.data.data[random2]);
              }
            })
            .catch(err => {
              console.log(err);
            });
        }, localTime);
      }

      //after for loop
      this.setState({ randomBook: localRandomBook });
    }
  };

  updateInter = obj => {
    let tempInter = this.state.currInterests;
    if (!tempInter.includes(obj)) {
      tempInter.push(obj);
      console.log("push new Interests to header successfully!!!!!!!");
    }
    for (let i = 0; i < tempInter.length; i++) {
      console.log("inter " + i + " in newInterlist: " + tempInter[i]);
    }
    this.setState({ currInterests: tempInter });
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
                this.props.setContent(<Body />);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#accountPage"
              onSelect={() => {
                this.login(this.state.user);
              }}
            >
              Account
            </Nav.Link>
            <Nav.Link
              href="#InterestsPage"
              onSelect={() => {
                //this.randomBook();
                //this.updateInterPage();
                this.props.setContent(
                  <InterestsPage randomBook={this.state.randomBook} />
                );
              }}
            >
              InterestsPage
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
