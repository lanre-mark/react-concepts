import React from "react";

import { LoginAuthorization } from "./now/AuthContextProvider";

const Header = () => {
  const {
    // isAuthenticated,
    // userProfile,
    handleLogin,
    logout,
  } = LoginAuthorization();

  // let page;
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
      <button onClick={handleLogin}>Here to Login</button>
      <button onClick={logout}>Here to Logout</button>
    </div>
  );
};

export default Header;
