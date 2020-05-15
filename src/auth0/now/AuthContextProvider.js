import React, { useState, useEffect, useContext } from "react"; // useReducer for now uncomment
import PropTypes from "prop-types";
import Auth0Lock from "auth0-lock";

import auth0Customize from "./AuthCustomize";

const LoginAuthContext = React.createContext(); // Context
export const LoginAuthorization = () => useContext(LoginAuthContext);

export const LoginAuthProvider = ({ children, config, memoryKey }) => {
  // const initialState = {  // for reducer implementation consideration
  //   authToken: "",
  //   profile: {},
  // };

  const defaultProps = {
    clientID: "s5BA3M7qgE6YHeZgkzChE3Z5Lwv18rqF", // config.clientID
    domain: "dev-mypandem.auth0.com", // config.domain
    options: auth0Customize,
  };

  // const reducer = (state, action) => {};
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [auth0LockClient, setAuth0Lock] = useState();
  const [expiryBy, setAuthExpiry] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false); // not used anymore
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
    const ExistinAuthCall = async () => {
      await handleExistinAuthIf();
    };
    if (auth0LockClient) {
      ExistinAuthCall();
      auth0LockClient.on("authenticated", async (authResponse) => {
        await handleObtainUserInfo(authResponse);
      });
    }
  }, [auth0LockClient]);

  useEffect(() => {
    if (raiseRenewalFlags) {
      // when flag is set to true
      // initiate call to renew token
      auth0LockClient.checkSession({}, async (err, authResponse) => {
        console.log("checkSession err", err);
        console.log("checkSession response", authResponse);
        await unlockUserFromEnvironment();
        setUserProfile({});
        setIsAuthenticated(false);
        if (err || !authResponse) {
          await loginPopup({});
        } else {
          await handleObtainUserInfo(authResponse);
        }
      });

      setRenewalFlags(false);
    }
  }, [raiseRenewalFlags]);

  const handleObtainUserInfo = async (authResponse) => {
    await auth0LockClient.getUserInfo(
      authResponse.accessToken,
      async (error, profile) => {
        if (error) {
          throw new Error(error);
        }
        try {
          await auth0LockClient.hide();
          const user = await createUsermeta(authResponse, profile);
          setUserProfile(user);
          setIsAuthenticated(true);
          setAuthExpiry(user.expiresat);
          scheduleAuthRefresh(-1);
          await lockUsertoEnvironment(user);
        } catch (error) {
          throw new Error(error);
        }
      }
    );
  };

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
    setRenewalFlags(true);
  };

  const handleExistinAuthIf = async () => {
    try {
      const usermeta = await returnUserinEnvironment();
      const [noReAuth, validDelay] = usermeta
        ? checkAuthExpired(usermeta.expiresat)
        : [true, -1];
      if (usermeta && !noReAuth) {
        console.log("scedule Auth refesh");
        await scheduleAuthRefresh(validDelay);
        setAuthExpiry(usermeta.expiresat);
        setIsAuthenticated(true);
      } else {
        // make sure the token key exist and not just default to Login unless app
        // has been used on this browser environment before
        console.log("just relogin");
        if (usermeta) {
          await loginPopup();
        }
      }
    } catch (error) {
      console.error(error);
    }
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
      console.log("isAuthenticated :: ", isAuthenticated);
      console.log("AuthRefreshTaskID :: ", authRenewalId);
      console.log(
        "Reminaing Delay for Expiry :: ",
        (expiryBy > 0 ? expiryBy : 0) - Date.now()
      );

      // await unlockUserFromEnvironment();
      // await auth0LockClient.logout({
      //   returnTo: window.location.origin,  //window.location.pathname
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
          authResponse.expiresIn * 1000 + new Date().getTime()
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
    await localStorage.removeItem(memoryKey);

  const returnUserinEnvironment = async () => {
    const usermeta = await localStorage.getItem(memoryKey);
    return usermeta ? await JSON.parse(usermeta) : null;
  };

  const checkAuthExpired = (expiry) => {
    const crAt = new Date().getTime(); // current time for validation
    const eAt = parseInt(expiryBy || expiry); //expirres at
    return [crAt > eAt, crAt > eAt ? 0 : eAt - crAt];
  };

  const scheduleAuthRefresh = async (state) => {
    let waitDelay = (expiryBy > 0 ? expiryBy : 0) - Date.now() || state;
    waitDelay = waitDelay <= 0 ? state : waitDelay;
    if (waitDelay > 0) {
      setRenewalIden(
        setTimeout(() => {
          handleTokenRenewal();
        }, waitDelay)
      );
    }
  };

  return (
    <LoginAuthContext.Provider
      value={{
        isAuthenticated,
        userProfile,
        loginOpen,
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
};
