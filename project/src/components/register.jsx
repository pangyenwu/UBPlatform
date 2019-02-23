import React, { Component } from "react";

class Register extends Component {
  state = {
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    password: null
  };

  render() {
    return (
      <React.Fragment>
        <h1> Register Page</h1>
        <label>
          Username:
          <input
            type="text"
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="username"
          />
        </label>
        <label>
          email:
          <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="email"
          />
        </label>
        <label>
          Firstname:
          <input
            type="text"
            onChange={e => this.setState({ firstname: e.target.value })}
            placeholder="Firstname"
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            onChange={e => this.setState({ lastname: e.target.value })}
            placeholder="Lastname"
          />
        </label>
        <label>
          password:
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="password"
          />
        </label>
        <button
          onClick={() =>
            this.props.putDataToUserDB({
              username: this.state.username,
              email: this.state.email,
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              password: this.state.password
            })
          }
        >
          Register
        </button>
      </React.Fragment>
    );
  }
}

export default Register;
