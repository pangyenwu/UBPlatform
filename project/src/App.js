import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
