import React, { Component } from "react";
import AddBook from "./addBook";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { access } from "fs";
import Body from "./body";
class AccountPage extends Component {
  render() {
    const data = [
      {
        name: this.props.user.firstname,
        email: this.props.user.email
      }
    ];
    // const bookData = [
    //   {
    //     title: this.props.user.firstname,
    //     price: this.props.user.email
    //   }
    // ];

    const userInfo = [
      {
        Header: "Username",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      }
    ];

    // const currentBook = [
    //   {
    //     Header: "Title",
    //     accessor: "title"
    //   },
    //   {
    //     Header: "Price",
    //     accessor: "price"
    //   },
    //   {
    //     Header: "Course",
    //     accessor: "course"
    //   }
    // ];

    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>
          Welcome {this.props.user.firstname + this.props.user.lastname}
        </h1>
        <table style={{ textAlign: "center" }}>
          <tr>
            <th>Your username</th>
            <th>Your account email</th>
            <th>Your ID</th>
          </tr>
          <tr>
            <td>{this.props.user.username}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user._id}</td>
          </tr>
        </table>
        <hr />
        <h2 style={{ textAlign: "center" }}>
          Here is the book you are currently selling
        </h2>

        <Body
          data={this.props.currentSellingBook}
          deleteByIdFromDB={this.props.deleteByIdFromDB}
        />
        {/* <ReactTable
          data={bookData}
          columns={currentBook}
          defaultPageSize={3}
          pageSizeOptions={[3, 6]}
        /> */}

        <AddBook
          username={this.props.user.username}
          putDataToDB={this.props.putDataToDB}
        />
      </React.Fragment>
    );
  }
}

export default AccountPage;
