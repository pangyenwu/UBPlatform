import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";
import axios from "axios";
import AccountPage from "./accountPage";
class InterestsPage extends Component {
  state = {
    data: [],
    intervalIsSet: null
  };

  getDataFromDb = obj => {
    axios
      .post("http://localhost:3001/api/guessYouLike", obj)
      .then(res => {
        console.log(res.data.data._id);
        this.state.data[0] = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* {this.randomBook()} */}
        {console.log("4")}
        {console.log("props randomBook: " + this.props.randomBook.length)}
        {this.props.randomBook.map(book => (
          <BookCardInfo key={book._id} bookInfo={book} />
        ))}
      </div>
    );
  }
}
export default InterestsPage;
