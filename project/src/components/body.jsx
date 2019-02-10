import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";

class Body extends Component {
  state = {
    data: {
      book: [
        { id: "123456", title: "Book#1", price: "$1000", course: "CSE442" },
        { id: "1234567", title: "Book#2", price: "$1000", course: "CSE101" }
      ]
    }
  };

  render() {
    console.log(this.state.Json);

    return (
      <div>
        {this.state.data.book.map(book => (
          <BookCardInfo key={book.id} bookInfo={book} />
        ))}
      </div>
    );
  }
}

export default Body;
