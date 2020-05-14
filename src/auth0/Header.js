import React from "react";
// import { Navbar, Nav, NavItem } from "react-bootstrap";

import { LoginAuthorization } from "./now/AuthContextProvider";

const Header = () => {
  // onLogin(){
  //   this.props.onLogin();
  // }
  // onLogout(){
  //   this.props.onLogout();
  // }

  const {
    isAuthenticated,
    userProfile,
    auth0LockClient,
    loginPopup,
  } = LoginAuthorization();
  let page;
  // console.log(isAuthenticated, " isAuthenticated on Header ");
  // console.log(userProfile, " userProfile on Header ");
  // console.log(auth0LockClient, " auth0LockClient on Header ");
  // console.log(loginPopup, " loginLock on Header ");
  // if(this.props.idToken){
  //   page=  <NavItem className="loginlogut" onClick={this.onLogout.bind(this)} href="#">Logout</NavItem>
  // }else{
  //   page= <NavItem className="loginlogut" onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
  // }
  // page = (
  //   <NavItem className="loginlogut" href="#">
  //     Login
  //   </NavItem>
  // );
  return (
    <div>
      <button onClick={loginPopup}>Here to Login</button>
    </div>
  );
};

export default Header;
