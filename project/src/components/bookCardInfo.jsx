import React, { Component } from "react";

class BookCardInfo extends Component {
  render() {
    return (
      <div class="col-sm-3">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCardInfo;
