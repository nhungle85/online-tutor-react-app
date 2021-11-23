import React, { Component } from "react";
import "./Footer.css"

export class Footer extends Component {
  render() {
    return (
      <footer className="siteFooter">
      <div className="container">
          <div className="row">
              <div className="col-sm-6 text-left">
                  <p>Need help? Contact us:</p>
                  <a role="button" className="btn btn-link siteFooter__buttonLink" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                  <a role="button" className="btn btn-link siteFooter__buttonLink" href="mailto:onlinetutor.com"><i className="fa fa-envelope-o"></i> onlinetutor.com</a>
              </div>
              <div className="col text-right">  
                  <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                  <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                  <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                  <p><small> Copy right: Resource from https://www.idtech.com/</small></p>
              </div>
          </div>
      </div>
      </footer>
    
    )}
}

export default Footer;
