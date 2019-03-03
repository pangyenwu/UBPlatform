import React, { Component } from "react";
import axios from "axios";

class AddBook extends Component {
  state = { title: null, price: null, course: null, url: null, owner: null };

  // our put method that uses our backend api
  // to create new query into our data base
  // # json = json object
  putDataToDB = json => {
    axios
      .post("http://localhost:3001/api/putData", json)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
            // this.props.setAccount();
            this.putDataToDB({
              title: this.state.title,
              price: this.state.price,
              course: this.state.course,
              url: this.state.url,
              owner: this.props.username
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
