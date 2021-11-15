import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
//rce
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <header id="site-header" className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-4 col-sm-3 col-md-2 align-self-center">
                <Link to="/">  
                  <img width="100px" src="assests/img/ot-logo.png" alt="Logo" className="img-fluid"/>
                </Link>
              </div>
              <div className="col">
                <h1>Online Tutor</h1>
                <h2>Your future start right here!</h2>
              </div>
              <div className="col-md-4 mt-4 text-right">
                <a role="button" className="btn btn-link" href="tel:+12065551234">
                  <i className="fa fa-phone"></i> 1-206-555-1234
                </a>
                <br />
                <a role="button" className="btn btn-link" href="mailto:onlinetutor.com">
                  <i className="fa fa-envelope-o"></i> onlinetutor.com
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
