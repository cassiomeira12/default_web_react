import React, { Component } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="/home/home2">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home2">Home</Link>
            </li>
            <li>
              <Link to="/home3">Home</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/home2">
              <About />
            </Route>
            <Route exact path="/home3">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
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

export default Login;
