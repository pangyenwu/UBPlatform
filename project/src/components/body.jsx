import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";
import axios from "axios";

class Body extends Component {
  state = {
    data: [],
    intervalIsSet: null
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();

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

  render() {
    return (
      <div>
        {this.state.data.map(book => (
          <BookCardInfo key={book._id} bookInfo={book} api={this.props.api} />
        ))}
      </div>
    );
  }
}

export default Body;
