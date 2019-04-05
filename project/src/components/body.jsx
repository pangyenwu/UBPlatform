import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PageButton from "./pageButton";

class Body extends Component {
  state = {
    data: [],
    intervalIsSet: null,
    display: [],
    input: "",
    searchType: "title",
    indexList: [],
    totalData: [],
    displayData: [],
    current: 1,
    pageSize: 8,
    goValue: 0,
    totalPage: 0
  };
  constructor(props) {
    super(props);
    this.pageNext = this.pageNext.bind(this);
    this.setPage = this.setPage.bind(this);
  }
  componentWillMount() {}
  setPage(num) {
    this.setState({
      indexList: this.state.totalData.slice(num, num + this.state.pageSize)
    });
  }

  pageNext(num) {
    this.setPage(num);
  }
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    // this.getDataFromDb();
    //Need better implementation for this in case of slow internet connection

    setTimeout(() => {
      this.setState({ display: this.state.data });
    }, 200);
    this.getDisplayData();
    setTimeout(() => {
      this.setState({
        totalPage: Math.ceil(this.state.totalData.length / this.state.pageSize)
      });
    });
    this.pageNext(this.state.goValue);

    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
  updateIndexList = data => {
    let retVal = [];
    for (let i = 0; i < this.state.pageSize; i++) {
      retVal.push(data[i]);
    }
    return retVal;
  };
  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDisplayData = () => {
    fetch(this.props.api + "/getData")
      .then(totalData => totalData.json())
      .then(res => {
        this.setState({ totalData: res.data });
        this.setState({ indexList: this.updateIndexList(res.data) });
      });
    // .then(res => this.setState({ indexList: this.state.totalData }));
  };
  // our first get method that uses our backend api to
  // fetch data from our data base
  // # see this.state.data

  // getDataFromDb = () => {
  //   fetch(this.props.api + "/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };

  // to remove existing database information
  // # idTodelete = _id from database
  deleteByIdFromDB = idTodelete => {
    axios.delete(this.props.api + "/deleteByIdData", {
      data: { id: idTodelete }
    });
  };

  search(type, input) {
    var books = [];
    this.state.data.map(book => {
      if (book[type] && book[type].toLowerCase().includes(input))
        books.push(book);
    });
    this.setState({ display: books });
  }

  render() {
    return (
      <div>
        <div style={{ paddingLeft: "40%" }}>
          <NavDropdown title={this.state.searchType} id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              onClick={() => {
                this.setState({ searchType: "title" });
              }}
            >
              title
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2"
              onClick={() => {
                this.setState({ searchType: "course" });
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
              this.setState({ display: this.state.data });
            }}
          >
            Reset
          </Button>
        </div>
        <hr />
        <div>
          {this.state.indexList.map(book => (
            <BookCardInfo key={book._id} bookInfo={book} api={this.props.api} />
          ))}
        </div>
        <PageButton {...this.state} pageNext={this.pageNext} />
      </div>
    );
  }
}

export default Body;
