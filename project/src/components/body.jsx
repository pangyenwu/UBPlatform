import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";

class Body extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(book => (
          <BookCardInfo
            key={book.id}
            bookInfo={book}
            deleteByIdFromDB={this.props.deleteByIdFromDB}
          />
        ))}
      </div>
    );
  }
}

export default Body;
