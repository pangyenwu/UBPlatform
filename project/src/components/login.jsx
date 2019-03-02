import React, { Component } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./loginStyle";
import axios from "axios";

class login extends Component {
  state = { username: null, password: null };

  LogintoDB = json => {
    axios
      .post("http://localhost:3001/api/login", json)
      .then(res => {
        if (res.data.user == null) {
          console.log({ success: false, message: "user not found." });
          return 0;
        }
        this.props.login(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <LoginWrapper>
          <LoginBox>
            <h1>Login Page</h1>
            <label>
              Username:
              <Input
                type="text"
                onChange={e => this.setState({ username: e.target.value })}
                placeholder="username"
              />
            </label>
            <label>
              Password:
              <Input
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
                placeholder="password"
              />
            </label>
            <Button
              onClick={() =>
                this.LogintoDB({
                  username: this.state.username,
                  password: this.state.password
                })
              }
            >
              Login to System
            </Button>
          </LoginBox>
        </LoginWrapper>
      </React.Fragment>
    );
  }
}

export default login;
