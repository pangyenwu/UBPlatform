import React, { Component } from "react";

class BookCardInfo extends Component {
  state = {
    id: this.props.bookInfo._id
  };

  render() {
    return (
      <div className="col-lg-2" style={{ display: "inline-table" }}>
        <div className="card">
          <div className="badge badge-dark">
            <img
              style={{ width: 300, height: "100%" }}
              src={this.props.bookInfo.url}
              alt="Logo"
            />
            <h5 className="card-title">
              Book Name: {this.props.bookInfo.title}
            </h5>
            <p className="card-text">Course: {this.props.bookInfo.course}</p>
            <p>Price: {this.props.bookInfo.price}</p>
            {/* <button
                onClick={() => {
                  this.props.deleteByIdFromDB(this.props.bookInfo._id);
                }}
              >
                Delete This Book
              </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCardInfo;
