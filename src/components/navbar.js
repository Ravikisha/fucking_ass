import React, { Component } from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
      
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Ravi Kishan</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Education</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

    </Nav>
      <Nav.Link href="#btn"><Button variant="primary">Meet Up</Button>{' '}</Nav.Link>
    </Container>
  </Navbar>
</>
      
    )
  }
}

export default Navigation;
