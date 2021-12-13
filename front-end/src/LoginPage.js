import React, { Component } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class LoginPage extends Component {
    render() {
      let navLink = (
        <div className="Tab">
          <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
            Sign In
          </NavLink>
          <NavLink exact to="/" activeClassName="activeLink" className="signUp">
            Sign Up
          </NavLink>
        </div>
      );
      const login = localStorage.getItem("isLoggedIn");
  
      return (
        <div className="App">
          {login ? (
            <Router>
              <Route exact path="/" component={Signup}></Route>
              <Route path="/sign-in" component={Signin}></Route>
              <Route path="/home" component={Home}></Route>
            </Router>
          ) : (
            <Router>
              {navLink}
              <Route exact path="/" component={Signup}></Route>
              <Route path="/sign-in" component={Signin}></Route>
              <Route path="/home" component={Home}></Route>
            </Router>
          )}
        </div>
      );
    }
  }