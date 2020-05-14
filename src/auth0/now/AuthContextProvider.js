import React, { useState, useEffect, useContext, useReducer } from "react";

import Auth0Lock from "auth0-lock";

const REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

const LoginAuthContext = React.createContext(); // Context
export const LoginAuthorization = () => useContext(LoginAuthContext);

export const LoginAuthProvider = (props) => {
  // {  children, onRedirectCallback = REDIRECT_CALLBACK, }
  // console.log("LoginAuthProvider ::", props);
  const options = {
    languageDictionary: {
      emailInputPlaceholder: "something@youremail.com",
      title: "Come view Stories",
    },
    theme: {
      logo: "https://img.icons8.com/nolan/64/ioxhost.png",
      primaryColor: "#31324F",
      authButtons: {
        testConnection: {
          displayName: "Test Conn",
          primaryColor: "#b7b7b7",
          foregroundColor: "#000000",
          icon: "https://img.icons8.com/nolan/64/ioxhost.png",
        },
        testConnection2: {
          primaryColor: "#000000",
          foregroundColor: "#ffffff",
        },
      },
    },
  };

  const initialState = {
    idToken: "",
    profile: {},
  };

  // console.log(process.env);

  const defaultProps = {
    clientID: "s5BA3M7qgE6YHeZgkzChE3Z5Lwv18rqF",
    domain: "dev-mypandem.auth0.com",
    options,
  };

  // redirect_uri: window.location.origin,

  // const reducer = (state, action) => {};
  // const [state, dispatch] = useReducer(reducer, initialState);

  // console.log("defaultProps", defaultProps);

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userProfile, setUserProfile] = useState();
  const [auth0LockClient, setAuth0Lock] = useState();
  // const [loading, setLoading] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const initAuthorization = async () => {
      const auth0LockHook = new Auth0Lock(
        defaultProps.clientID,
        defaultProps.domain,
        defaultProps.options
      );
      setAuth0Lock(auth0LockHook);
    };
    initAuthorization();
  }, []);

  const loginPopup = async (params = {}) => {
    try {
      await auth0LockClient.show(params);
    } catch (error) {
      console.error(error);
    } finally {
      // just notify of actions to be taken while User is on Auth0 login page
      setLoginOpen(true);
    }
  };

  return (
    <LoginAuthContext.Provider
      value={{ isAuthenticated, userProfile, auth0LockClient, loginPopup }}
    >
      {props.children}
    </LoginAuthContext.Provider>
  );
};
