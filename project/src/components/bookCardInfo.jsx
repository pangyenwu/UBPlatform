import React, { Component } from "react";

class BookCardInfo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.bookInfo.title}</h5>
          <p className="card-text">{this.props.bookInfo.course}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default BookCardInfo;
