import React, { useState, useEffect } from "react";

import { LoginAuthorization } from "./now/AuthContextProvider";
import { GeneralDataAdapter } from "../axios/Providers/GeneralDataProvider";

const Header = () => {
  const {
    // isAuthenticated,
    // userProfile,
    handleLogin,
    logout,
  } = LoginAuthorization();

  const { getGeneralData } = GeneralDataAdapter();

  const loadAgerange = async () => {
    await getGeneralData.getAgeRanges();
  };

  const loadGender = async () => {
    await getGeneralData.getGender();
  };

  const [_storyFlags, setStoryFlags] = useState();
  const [_ageRanges, setAgeranges] = useState();
  const [_gender, setGender] = useState();

  useEffect(() => {
    if (getGeneralData.payload && getGeneralData.modelType) {
      if (getGeneralData.modelType === "storyflag") {
        setStoryFlags(getGeneralData.payload);
      } else if (getGeneralData.modelType === "agerange") {
        setAgeranges(getGeneralData.payload);
      } else if (getGeneralData.modelType === "gender") {
        setGender(getGeneralData.payload);
      }
    }
    // eslint-disable-next-line
  }, [getGeneralData.payload]);

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
      <button onClick={loadAgerange}>Checking the Axios - AgeRange</button>
      <button onClick={loadGender}>Checking the Axios - Gender</button>
      <select>
        {_ageRanges &&
          _ageRanges.map((item) => (
            <option key={item._id} value={item.range}>
              {item.range}
            </option>
          ))}
        )}
      </select>
    </div>
  );
};

export default Header;
