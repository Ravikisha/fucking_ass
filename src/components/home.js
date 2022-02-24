import React, { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./home.css";
export class Navigation extends Component {
  render() {
    return (
      <>
        <div className="dark-bg">
          <div class="container">
            <div class="glitch" data-text="RAVI KISHAN">
              RAVI KISHAN
            </div>
            <div class="glow">RAVI KISHAN</div>
            <p class="subtitle">CRAZY DEVELOPER</p>
          </div>
          <div class="scanlines"></div>
        </div>
      </>
    );
  }
}

export default Navigation;
