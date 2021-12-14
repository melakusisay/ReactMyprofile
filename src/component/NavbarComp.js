
import React, { Component } from 'react'
import Login from './Login';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
 class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
    <Navbar bg="dark" variant="red" expand="lg" floated="right">
    <Navbar.Brand href="#">MELA SOFTWARE </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
        
        <NavDropdown title="Service" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Payment</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
        <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
      
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
</Navbar>
</div>
  <div>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
    </Switch>
  </div>
  </Router>   
    )
  }
}
export default NavbarComp