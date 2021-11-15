import React, { Component } from "react";
import Body from "./Body";
import Footer from "./common/Footer";
import Header from "./common/Header";

export class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
