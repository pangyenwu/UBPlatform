import React, { Component } from "react";
import AddBook from "./addBook";

class AccountPage extends Component {
  render() {
    return (
      <React.Fragment>
        <p> Welcome to your account page</p>
        <table style={{ width: 100 }}>
          <tr>
            <th>Firstname:</th>
            <th>Lastname:</th>
            <th>Your Email:</th>
          </tr>
          <tr>
            <td>{this.props.user.firstname}</td>
            <td>{this.props.user.lastname}</td>
            <td>{this.props.user.email}</td>
          </tr>
        </table>
        <AddBook putDataToDB={this.props.putDataToDB} />
      </React.Fragment>
    );
  }
}

export default AccountPage;
