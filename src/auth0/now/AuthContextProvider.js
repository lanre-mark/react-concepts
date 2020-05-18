import React, { useState, useEffect, useContext, useRef } from "react"; // useReducer for now uncomment
import PropTypes from "prop-types";
import Auth0Lock from "auth0-lock";

const LoginAuthContext = React.createContext(); // Context
export const LoginAuthorization = () => useContext(LoginAuthContext);

export const LoginAuthProvider = ({ children, config, memoryKey }) => {
  // const initialState = {  // for reducer implementation consideration
  //   authToken: "",
  //   profile: {},
  // };

  const defaultProps = {
    clientID: config.clientID,
    domain: config.domain,
    options: config.options,
  };

  // const reducer = (state, action) => {};
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(undefined);
  const [auth0LockClient, setAuth0Lock] = useState();
  const [expiryBy, setAuthExpiry] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [authRenewalId, setRenewalIden] = useState(null);
  const [raiseRenewalFlags, setRenewalFlags] = useState(false);
  const [authToken, setAuthToken] = useState("");

  let referenceActivities = useRef();

  useEffect(() => {
    referenceActivities.current = {
      async handleExistinAuthIf() {
        try {
          const usermeta = await returnUserinEnvironment();
          const [noReAuth, validDelay] = usermeta
            ? checkAuthExpired(usermeta.expiresat)
            : [true, -1];
          if (usermeta && !noReAuth) {
            setUserProfile(usermeta);
            setIsAuthenticated(true);
            setAuthToken(usermeta.accesstoken);
            setAuthExpiry(usermeta.expiresat);
            await scheduleAuthRefresh(validDelay);
          } else {
            // make sure the token key exist and not just default to Login unless app
            // has been used on this browser environment before
            if (usermeta) {
              await handleLogin();
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
      async handleObtainUserInfo(authResponse) {
        console.log("about to handle user info");
        await auth0LockClient.getUserInfo(
          authResponse.accessToken,
          async (error, profile) => {
            if (error) {
              throw new Error(error);
            }
            setAuthToken(authResponse.accessToken);
            console.log("obtained token ", authResponse.accessToken);
            try {
              await auth0LockClient.hide();
              const [user, validDelay] = await createUsermeta(
                authResponse,
                profile
              );
              console.log("returned user profile ", user);
              setUserProfile(user);
              setIsAuthenticated(true);
              await scheduleAuthRefresh(validDelay);
              setAuthExpiry(user.expiresat);
              await lockUsertoEnvironment(user);
            } catch (error) {
              throw new Error(error);
            }
          }
        );
      },
    };
  });

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
  }, [defaultProps.clientID, defaultProps.domain, defaultProps.options]);

  useEffect(() => {
    const ExistinAuthCall = async () => {
      console.log("run HandleExisting from factory");
      await referenceActivities.current.handleExistinAuthIf();
      console.log("completed HandleExisting from factory");
    };
    if (auth0LockClient) {
      ExistinAuthCall();
      auth0LockClient.on("authenticated", async (authResponse) => {
        console.log("authentication response ::", authResponse);
        await referenceActivities.current.handleObtainUserInfo(authResponse);
        setLoginOpen(false);
      });
      auth0LockClient.on("authorization_error", async (error) => {
        // received an authentication error, needs to be handled
        // NOTE this promise must be resolved
        console.log("authorization error");
      });
      auth0LockClient.on("signup error", async (error) => {
        // recturned an error while signing up, needs to be handled
        // NOTE this promise must be resolved
        console.log("sugnup error");
      });
      auth0LockClient.on("unrecoverable_error", async (error) => {
        // received an unrecoverbale error perhaps Connection etc, needs to be handled
        // NOTE this promise must be resolved
        console.log("unrecoverable error");
      });
    }
  }, [auth0LockClient]);

  useEffect(() => {
    if (raiseRenewalFlags) {
      // when flag is set to true
      // initiate call to renew token
      // need to add pervious scope here
      auth0LockClient.checkSession(
        { scope: "myScopes" },
        async (err, authResponse) => {
          // console.log("checkSession err", err);
          // console.log("checkSession response", authResponse);
          await unlockUserFromEnvironment();
          setUserProfile(undefined);
          setIsAuthenticated(false);
          setAuthToken("");
          if (err || !authResponse) {
            await handleLogin({});
          } else {
            await referenceActivities.current.handleObtainUserInfo(
              authResponse
            );
            setLoginOpen(false);
          }
        }
      );

      setRenewalFlags(false);
    }
  }, [raiseRenewalFlags]);

  // const handleObtainUserInfo = async (authResponse) => {
  //   console.log("HandleObtainUserInfo Response ::", authResponse);
  //   await auth0LockClient.getUserInfo(
  //     authResponse.accessToken,
  //     async (error, profile) => {
  //       if (error) {
  //         throw new Error(error);
  //       }
  //       console.log("HandleObtainUserInfo Profile ::", profile);
  //       setAuthToken(authResponse.accessToken);
  //       try {
  //         await auth0LockClient.hide();
  //         const [user, validDelay] = await createUsermeta(
  //           authResponse,
  //           profile
  //         );
  //         console.log("HandleObtainUserInfo User ::", user);
  //         setUserProfile(user);
  //         setIsAuthenticated(true);
  //         await scheduleAuthRefresh(validDelay);
  //         setAuthExpiry(user.expiresat);
  //         await lockUsertoEnvironment(user);
  //       } catch (error) {
  //         throw new Error(error);
  //       }
  //     }
  //   );
  // };

  const handleLogin = async (params = {}) => {
    try {
      setLoginOpen(true);
      await auth0LockClient.show(params);
    } catch (error) {
      console.error(error);
    } finally {
      // just notify of actions to be taken while User is on Auth0 login page
    }
  };

  const handleTokenRenewal = async () => {
    setRenewalFlags(true);
  };

  // const handleExistinAuthIf = async () => {
  //   try {
  //     const usermeta = await returnUserinEnvironment();
  //     const [noReAuth, validDelay] = usermeta
  //       ? checkAuthExpired(usermeta.expiresat)
  //       : [true, -1];
  //     if (usermeta && !noReAuth) {
  //       // console.log("scedule Auth refesh");
  //       setUserProfile(usermeta);
  //       setIsAuthenticated(true);
  //       setAuthToken(usermeta.accesstoken);
  //       setAuthExpiry(usermeta.expiresat);
  //       await scheduleAuthRefresh(validDelay);
  //     } else {
  //       // make sure the token key exist and not just default to Login unless app
  //       // has been used on this browser environment before
  //       // console.log("just relogin");
  //       if (usermeta) {
  //         await handleLogin();
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleLogout = async (...p) => {
    // clear any scheduled timeout for a token refresh/renewal
    // remove user from any saved state in browser
    // log out API call to Auth0 with redirection to current page
    // reset user Profile object
    // reset isAuthenticated to false
    try {
      console.log("Time of Expiry :: ", expiryBy);
      console.log("isAuthenticated :: ", isAuthenticated);
      console.log("AuthRefreshTaskID :: ", authRenewalId);
      console.log(
        "Reminaing Delay for Expiry :: ",
        (expiryBy > 0 ? expiryBy : 0) - Date.now()
      );
      // clearTimeout(authRenewalId);
      // await unlockUserFromEnvironment();
      // await auth0LockClient.logout(...p);
      // setUserProfile(undefined);
      // setIsAuthenticated(false);
      // setAuthToken('')
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
        scope: authResponse.scope,
        state: authResponse.state,
        expiresat: JSON.stringify(
          authResponse.expiresIn * 1000 + new Date().getTime()
        ),
        isAuthenticated: true,
        profile: profile,
      };
      return [usermeta, parseInt(usermeta.expiresat) - new Date().getTime()];
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
    console.log("scheduleAuthRefresh :: ", expiryBy);
    console.log("scheduleAuthRefresh :: ", Date.now());
    let waitDelay = (expiryBy > 0 ? expiryBy : 0) - Date.now() || state;
    waitDelay = waitDelay <= 0 ? state : waitDelay;
    if (waitDelay > 0) {
      console.log("Setting up renewal");
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
        authToken,
        userProfile: userProfile ? userProfile.profile : userProfile,
        loginOpen,
        handleLogin,
        logout: (...p) => handleLogout(...p),
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
