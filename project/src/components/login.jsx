import React, { Component } from "react";
import StickyHeader from "react-headroom";

class login extends Component {
  state = { username: null, password: null };

  render() {
    return (
      <React.Fragment>
        <label>
          Username:
          <input
            type="text"
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="email"
          />
        </label>
        <button
          onClick={() =>
            this.props.LogintoDB({
              username: this.state.username,
              password: this.state.password
            })
          }
        >
          Login to System
        </button>
      </React.Fragment>
    );
  }
}

export default login;
