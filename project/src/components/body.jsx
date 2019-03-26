import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Body extends Component {
  state = {
    data: [],
    intervalIsSet: null,
    display: [],
    input: "",
    searchType: "title"
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    //Need better implementation for this in case of slow internet connection
    setTimeout(()=>{this.setState({display: this.state.data})}, 200);
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // our first get method that uses our backend api to
  // fetch data from our data base
  // # see this.state.data
  getDataFromDb = () => {
    fetch(this.props.api+"/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // to remove existing database information
  // # idTodelete = _id from database
  deleteByIdFromDB = idTodelete => {
    axios.delete(this.props.api+"/deleteByIdData", {
      data: { id: idTodelete }
    });
  };

  search(type,input){
    var books = [];
    this.state.data.map(book => {
      if (book[type] && book[type].toLowerCase().includes(input)) books.push(book);
    });
    this.setState({display: books});
  };

  render() {
    return (
      <div>
        <div style={{paddingLeft:"40%"}}>
          <NavDropdown title={this.state.searchType} id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              onClick={() => {
                this.setState({searchType: "title"});           
              }}
            >
              title
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2"
              onClick={() => {
                this.setState({searchType: "course"});
              }}
            >
              course
            </NavDropdown.Item>
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
              this.search(this.state.searchType, this.state.input);
            }}
          >
            Search
          </Button>
          <Button
            style={{ margin: "5px" }}
            variant="outline-primary"
            onClick={() => {
              this.setState({display: this.state.data});
            }}
          >
            Reset
          </Button>
        </div>
        <hr/>
        <div>
          {this.state.display.map(book => (
            <BookCardInfo key={book._id} bookInfo={book} api={this.props.api} />
          ))
          }
        </div>
      </div>
    );
  }
}

export default Body;
