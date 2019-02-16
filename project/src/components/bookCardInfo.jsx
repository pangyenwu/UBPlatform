import React, { Component } from "react";

class BookCardInfo extends Component {
  render() {
    return (
      <div className="col-sm-3" style={{ display: "inline-grid" }}>
        <div className="card">
          <div className="card-body">
            <div className="badge badge-primary">
              <img
                style={{ width: 200 }}
                src={this.props.bookInfo.url}
                alt="Logo"
              />
              <h5 className="card-title">{this.props.bookInfo.title}</h5>
              <p className="card-text">{this.props.bookInfo.course}</p>
              <p> {this.props.bookInfo.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCardInfo;
