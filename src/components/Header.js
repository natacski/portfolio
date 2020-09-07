import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/profile" className="titles">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/background" className="titles">
              Background
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="titles">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="titles">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
