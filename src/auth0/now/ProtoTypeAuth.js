import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const options = {
  languageDictionary: {
    emailInputPlaceholder: 'something@youremail.com',
    title: 'Come view Stories',
  },
  theme: {
    logo: 'https://img.icons8.com/nolan/64/ioxhost.png',
    primaryColor: '#31324F',
    authButtons: {
      testConnection: {
        displayName: 'Test Conn',
        primaryColor: '#b7b7b7',
        foregroundColor: '#000000',
        icon: 'https://img.icons8.com/nolan/64/ioxhost.png',
      },
      testConnection2: {
        primaryColor: '#000000',
        foregroundColor: '#ffffff',
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
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
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

/*
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Flags } from 'react-feature-flags';
import { useMediaQuery } from 'react-responsive';
import { LoginAuthorization } from '../SiteLogin/AuthorizeContextProvider';

import base from './wide-base@2x.png';
import Chat from '../../common/icons/Chat';
// import AddStoryIcon from '../../common/icons/AddStory';
import LocationIcon from '../../common/icons/LocationIcon';
import SideListIcon from '../../common/icons/SideList';
import GeoSearchBar from '../GeoSearchBar/GeoSearchBar';
import { limitNameCount } from '../../common/helpers/helper';
import { config } from '../../common/config/config';
import MainPopup from '../Popup/PopupContainer';
import './Navbar.scss';

const Logo = () => {
  return (
    <>
      <div className="navbar__group31">
        <div className="navbar__group12">
          <img alt="icon1" src={base} className="navbar__base" />
        </div>
        <Chat className="navbar__chat6" />
      </div>
      <div className="navbar__app-name">
        <p className="navbar__app-name-first">MY PANDEMIC</p>
        <p className="navbar__app-name-second">EXPERIENCE</p>
      </div>
    </>
  );
};

const Navbar = (props) => {
  const {
    userProfile,
    loginOpen,
    handleLogin,
    logout,
    triggerMoreInfo,
    resetMoreinfo,
  } = LoginAuthorization();
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 768px)' });
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const updateMoreInfoCall = async (event) => {
    event.preventDefault(event);
    console.log('Alias :: ', event.target.name.value);
    console.log('Age Range :: ', event.target.agerange.value);
    console.log('Country :: ', event.target.country.value);
    console.log('City :: ', event.target.city.value);
    console.log('Ethnicity :: ', event.target.ethnicity.value);
    console.log('Gender :: ', event.target.gender.value);
  };

  return (
    <Flags authorizedFlags={['nav']}>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Flags
                authorizedFlags={['nav.CLICKABLE']}
                renderOn={() => (
                  <NavLink to="" onClick={() => {}}>
                    <Logo />
                  </NavLink>
                )}
                renderOff={() => <Logo />}
              />
            </li>
            <Flags authorizedFlags={['nav.LOCATION']}>
              <li>
                <LocationIcon className="navbar__icon" withRadius={false} />
              </li>
            </Flags>
            <Flags authorizedFlags={['nav.LIST_ALL']}>
              <li>
                <SideListIcon className="navbar__sidelist" withRadius={false} />
              </li>
            </Flags>

            <li>
              {loginOpen === false && userProfile ? (
                <div className="navbar__profile">
                  {!loginOpen && userProfile && (
                    <>
                      {!userProfile.picture && (
                        <p
                          onMouseEnter={handleHover}
                          onTouchStart={handleHover}
                          className="__signInOrUp--small"
                        >
                          {limitNameCount(
                            userProfile.name,
                            config.profileNameLimit
                          )}
                        </p>
                      )}
                      {userProfile.picture && (
                        <>
                          {isBigScreen === true ? (
                            <div
                              className="rounded__avatar"
                              onMouseEnter={handleHover}
                              onTouchStart={handleHover}
                            >
                              <span>
                                {limitNameCount(
                                  userProfile.name,
                                  config.profileNameLimit
                                )}
                              </span>
                              <img
                                src={userProfile.picture}
                                alt="avatar"
                                className="user__avatar"
                              />
                            </div>
                          ) : (
                            <div
                              className="rounded__avatar"
                              onMouseEnter={handleHover}
                              onTouchStart={handleHover}
                            >
                              <img
                                src={userProfile.picture}
                                alt="avatar"
                                className="user__avatar"
                              />
                            </div>
                          )}
                        </>
                      )}
                      {userProfile && userProfile.name && (
                        <div
                          style={{
                            visibility: hover === true ? 'visible' : 'hidden',
                          }}
                          className="profile__dropdown"
                        >
                          {isBigScreen === true ? null : (
                            <span>
                              {limitNameCount(
                                userProfile.name,
                                config.profileNameLimit
                              )}
                            </span>
                          )}

                          <NavLink className="__signInOrUp--active" to="#">
                            My Account
                          </NavLink>

                          <NavLink
                            className="__signInOrUp--active"
                            to="#"
                            onClick={() =>
                              logout({ returnTo: window.location.origin })
                            }
                          >
                            Log Out
                          </NavLink>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div className="navbar__signInOrUp">
                  {!loginOpen && !userProfile && (
                    <>
                      <Flags authorizedFlags={['nav.SIGNIN']}>
                        <>
                          <NavLink
                            className="__signInOrUp--inactive"
                            to="#"
                            onClick={handleLogin}
                          >
                            Sign Up
                          </NavLink>
                        </>
                      </Flags>

                      <Flags authorizedFlags={['nav.SIGNUP']}>
                        <NavLink
                          className="__signInOrUp--inactive"
                          to="#"
                          onClick={handleLogin}
                        >
                          Sign In
                        </NavLink>
                      </Flags>
                    </>
                  )}
                </div>
              )}
              {!loginOpen && userProfile && triggerMoreInfo && (
                <>
                  <MainPopup
                    onSubmit={updateMoreInfoCall}
                    handlePopupSessionClose={() => resetMoreinfo(false)}
                  />
                </>
              )}
            </li>
            <Flags authorizedFlags={['nav.SEARCH']}>
              <li>
                <GeoSearchBar />
              </li>
            </Flags>
          </ul>
        </nav>
        {props.children}
      </header>
    </Flags>
  );
};

export default Navbar;

*/
