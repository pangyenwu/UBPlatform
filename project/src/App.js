import React, { Component } from "react";
import "./App.css";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";
import axios from "axios";

class App extends Component {
  // initialize our state
  state = {
    content: <Body />,
    deleteByIdFromDB: null,
    book: [
      {
        title: "Harry Potter",
        price: "$2",
        course: "CSE442",
        url:
          "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
      },
      {
        title: "Harry Potter",
        price: "$20",
        course: "CSE442",
        url:
          "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
      }
    ]
  };

  //Warning! This is use for test purpose, This will delete all data in database
  deleteAll = () => {
    this.state.data.forEach(dat => {
      axios.delete("http://localhost:3001/api/deleteByIdData", {
        data: {
          id: dat._id
        }
      });
    });
  };

  //This method allow to add multiple book at once
  // arrBook = array of JSON that contain book information (see dataschema for detail)
  addAll = arrBook => {
    arrBook.forEach(bok => {
      axios.post("http://localhost:3001/api/putData", bok);
    });
  };

  setContent = obj => {
    this.setState({ content: obj });
  };

  render() {
    return (
      <React.Fragment>
        <Header setContent={this.setContent} />
        {this.state.content}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
