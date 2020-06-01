import React, { Component } from "react";

import { Navbar, Nav, NavItem } from "react-bootstrap";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top" fluid>
                <Navbar.Header>
                  <Navbar.Brand></Navbar.Brand>
                  <Navbar.Toggle onClick={() => {}} />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav className="mr-auto">
                    <NavItem componentClass={Link} href="/home" to="/home">
                      Home
                    </NavItem>
                    <NavItem componentClass={Link} href="/about" to="/about">
                      About
                    </NavItem>
                    <NavItem
                      componentClass={Link}
                      href="/dashboard"
                      to="/dashboard"
                    >
                      Dashboard
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <ul>
                <li>{/* <Link to="/home">Home</Link> */}</li>
                <li>{/* <Link to="/about">Home</Link> */}</li>
                <li>{/* <Link to="/dashboard">Home</Link> */}</li>
              </ul>
              <Switch>
                <Route exact path="/home">
                  <Home1 />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

function Home1() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Home;
