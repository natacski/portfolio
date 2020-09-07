import React, { Component } from "react";
import icon from "../icon1.png";
import icon2 from "../icon2.png";

class Footer extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#ADEFD1FF" }}>
        <a href="https://github.com/natacski" target="blank">
          <img className="footer-icons" src={icon} alt="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/natalia-cielinski-7a8031142/"
          target="blank"
        >
          <img className="footer-icons" src={icon2} alt="linkedin"></img>
        </a>
      </div>
    );
  }
}

export default Footer;
