import React, { Component } from "react";
import { MyContext } from "./myData";

class AddBook extends Component {
  state = { title: null, price: null, course: null, url: null };

  render() {
    return (
      <div style={{ padding: "10px", display: "grid" }}>
        <label>
          Book title:
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
            placeholder=""
            style={{ width: "200px" }}
          />
        </label>

        <label>
          Book Price:
          <input
            type="text"
            onChange={e => this.setState({ price: e.target.value })}
            placeholder=""
            style={{ width: "200px" }}
          />
        </label>

        <label>
          Course:
          <input
            type="text"
            onChange={e => this.setState({ course: e.target.value })}
            placeholder=""
            style={{ width: "200px" }}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            onChange={e => this.setState({ url: e.target.value })}
            placeholder=""
            style={{ width: "200px" }}
          />
        </label>

        <button
          style={{ width: "200px" }}
          onClick={() => {
            this.props.putDataToDB({
              title: this.state.title,
              price: this.state.price,
              course: this.state.course,
              url: this.state.url
            });
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddBook;
