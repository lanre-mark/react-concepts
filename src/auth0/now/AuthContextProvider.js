import React, { useState, useEffect, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import Auth0Lock from "auth0-lock";

import auth0Customize from "./AuthCustomize";

const REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

const LoginAuthContext = React.createContext(); // Context
export const LoginAuthorization = () => useContext(LoginAuthContext);

export const LoginAuthProvider = ({
  children,
  config,
  onRedirectCallback = REDIRECT_CALLBACK,
  memoryKey,
}) => {
  // console.log("LoginAuthProvider ::", children);
  // console.log("LoginAuthProvider ::", config);
  // console.log("LoginAuthProvider ::", memoryKey);

  // const initialState = {  // for reducer implementation consideration
  //   authToken: "",
  //   profile: {},
  // };

  const defaultProps = {
    clientID: "s5BA3M7qgE6YHeZgkzChE3Z5Lwv18rqF",
    domain: "dev-mypandem.auth0.com",
    options: auth0Customize,
    // signout_url: "http://localhost:3000",
  };

  // redirect_uri: window.location.origin,

  // const reducer = (state, action) => {};
  // const [state, dispatch] = useReducer(reducer, initialState);

  // console.log("defaultProps", new Date.getTime());

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [auth0LockClient, setAuth0Lock] = useState();
  const [expiryBy, setAuthExpiry] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [authRenewalId, setRenewalIden] = useState(null);
  const [raiseRenewalFlags, setRenewalFlags] = useState(false);

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

  useEffect(() => {
    if (auth0LockClient) {
      auth0LockClient.on("authenticated", async (authResponse) => {
        await auth0LockClient.getUserInfo(
          authResponse.accessToken,
          async (error, profile) => {
            if (error) {
              throw new Error(error);
            }
            console.log("And Profile ::", profile);
            try {
              await auth0LockClient.hide();
              const user = await createUsermeta(authResponse, profile);
              setUserProfile(user);
              setIsAuthenticated(true);
              setAuthExpiry(user.expiresat);
              console.log("Check Expiry Constant :: ", userProfile.expiresat);
              await scheduleAuthRefresh();
              await lockUsertoEnvironment(user);
            } catch (error) {
              throw new Error(error);
            }
          }
        );
      });
    }
  }, [auth0LockClient]);

  useEffect(() => {
    if (raiseRenewalFlags) {
      console.log("Workflow for Renewal to Begin");
      // when flag is set to true
      // initiate call to renew token
      setRenewalFlags(false);
    }
  }, [raiseRenewalFlags]);

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

  const handleTokenRenewal = async () => {
    console.log("Handle TOken Renewal Now");
    await setRenewalFlags(true);
  };

  const logout = async () => {
    // clear any scheduled timeout for a token refresh/renewal
    // remove user from any saved state in browser
    // log out API call to Auth0 with redirection to current page
    // reset user Profile object
    // reset isAuthenticated to false
    try {
      // clearTimeout(authRenewalId);
      console.log("Time of Expiry :: ", expiryBy);
      console.log(
        "Reminaing Delay for Expiry :: ",
        (expiryBy > 0 ? expiryBy : 0) - Date.now()
      );

      // await unlockUserFromEnvironment;
      // await auth0LockClient.logout({
      //   returnTo: window.location.origin,
      // });
      // setUserProfile({});
      // setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    } finally {
      // invoke action to enforce logout
    }
  };

  const createUsermeta = async (authResponse, profile) => {
    // manual destructure of keys from profile and authRepsonse
    try {
      const usermeta = {
        accesstoken: authResponse.accessToken,
        idtoken: authResponse.idToken,
        idtokenpayload: authResponse.idTokenPayload,
        expiresat: JSON.stringify(
          authResponse.expiresIn + new Date().getTime()
          // authResponse.expiresIn * 1000 + new Date().getTime()
        ),
        isAuthenticated: true,
        profile: profile,
      };
      return usermeta;
    } catch (error) {
      console.error(error);
      // raise notification error to backend logs
      throw new Error(error);
    }
  };

  // add user to browser state environment
  const lockUsertoEnvironment = async (usermeta) =>
    await localStorage.setItem(memoryKey, JSON.stringify(usermeta));

  // remove user from browser state environment
  const unlockUserFromEnvironment = async () =>
    localStorage.removeItem(memoryKey);

  const returnUserinEnvironment = async () => {
    const usermeta = await localStorage.getItem(memoryKey);
    return usermeta ? await JSON.parse(usermeta) : null;
  };

  const checkAuthExpired = async () => (await new Date().getTime()) > expiryBy;

  const scheduleAuthRefresh = async () => {
    const waitDelay = (expiryBy > 0 ? expiryBy : 0) - Date.now();
    console.log("waitDelay is ::", waitDelay);
    if (waitDelay > 0) {
      console.log("proceeding to queue user for refresh");
      await setRenewalIden(
        setTimeout(async () => {
          console.log("Handle Toekn Renewal Initiator");
          await handleTokenRenewal();
        }, waitDelay)
      );
      console.log("RenewalIdentifier Timeout :: ", authRenewalId);
    }
  };

  return (
    <LoginAuthContext.Provider
      value={{
        isAuthenticated,
        userProfile,
        // auth0LockClient,
        loginPopup,
        logout,
      }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
};

LoginAuthProvider.Prototypes = {
  config: PropTypes.string.isRequired,
  memoryKey: PropTypes.string.isRequired,
  onRedirectCallback: PropTypes.func.isRequired,
};
