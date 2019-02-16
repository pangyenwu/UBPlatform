import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";

class Body extends Component {
  state = {
    data: {
      book: [
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        },
        {
          id: "123456",
          title: "Harry Potter",
          price: "$2000",
          course: "CSE442",
          url:
            "https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"
        }
      ]
    }
  };

  render() {
    console.log(this.state.Json);

    return (
      <div>
        {this.state.data.book.map(book => (
          <BookCardInfo key={book.id} bookInfo={book} />
        ))}
      </div>
    );
  }
}

export default Body;
