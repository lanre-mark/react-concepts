import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

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

/**
 * return back to the currect page after completion of rediect to Auth0
 */
const WPE_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const LoginAuthContext = React.createContext();

/**
 * Load this from component requiring login/authentication
 */
export const LoginAuthorization = () => useContext(LoginAuthContext);

/**
 *
 * @param {app wide props} // inject this into App layer
 */
export const LoginAuthProvider = ({
  children,
  onRedirectCallback = WPE_REDIRECT_CALLBACK,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  const initOptions = {
    domain: window.AUTH0_DOMAIN,
    client_id: window.AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin,
    options,
  };

  useEffect(() => {
    const initAuthorization = async () => {
      // create Auth0 client for signin/signup

      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        // authenticate the user from the hook
        const { appState } = await auth0FromHook.handleRedirectCallback();
        // update the  browser history here
        onRedirectCallback(appState);
      }

      // validate if the user is authenticated
      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        // return the user identity once authenticated
        // perform custom activities using a function wrapped in useCallback
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuthorization();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = async (...p) => {
    // perform some activities
    await auth0Client.logout(...p);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <LoginAuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => handleLogout(...p),
      }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
};
