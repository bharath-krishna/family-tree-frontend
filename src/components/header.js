import React, { Component } from 'react'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Family Tree</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tree">Tree</NavDropdown.Item>
              <NavDropdown.Item href="/network2d">2D Network</NavDropdown.Item>
              <NavDropdown.Item href="/network3d">3D Network</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Clear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}