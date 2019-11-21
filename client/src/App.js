//references
//https://www.youtube.com/watch?v=56E8b9prPTs
//https://github.com/iamfaiz/react-auth-ui
//https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes
//https://serverless-stack.com/chapters/create-a-login-page.html

import React from "react";
import { HashRouter as Router, Route, Redirect,  NavLink, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import SignUpForm from "./pages/signUp/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Profile from "./pages/profilePage/Profile"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


export default function App() {
  return(
    <Router>
      <Navbar />
      <PrivateRouteLogIn path="/sign-in"> <SignInForm/> </PrivateRouteLogIn>
      <PrivateRouteRegister path="/register"> <SignUpForm/> </PrivateRouteRegister>
      <PrivateRoute path="/profile-page">
        <Profile />
      </PrivateRoute>
      {/*<Route path="/profile-page" component={Profile}></Route>*/}
    </Router>
  );

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('usertoken') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  function PrivateRouteLogIn({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('usertoken') ? (
            <Redirect
              to={{
                pathname: "/profile-page",
                state: { from: location }
              }}
            />
          ) : (
            children
          )
        }
      />    
    );
  }
  function PrivateRouteRegister({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('usertoken') ? (
            <Redirect
              to={{
                pathname: "/profile-page",
                state: { from: location }
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }
}
