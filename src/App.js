import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./auth0/Header";
import { LoginAuthProvider } from "./auth0/now/AuthContextProvider";
import auth0Customize from "./auth0/now/AuthCustomize";
import { GeneralDataContextProvider } from "./axios/Providers/GeneralDataProvider";

/**
 *
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Demystifying React Concepts</h1>
      </header>
      <LoginAuthProvider
        config={{
          clientID: "s5BA3M7qgE6YHeZgkzChE3Z5Lwv18rqF",
          domain: "dev-mypandem.auth0.com",
          options: auth0Customize,
        }}
        memoryKey={"auth0:mee"}
      >
        <GeneralDataContextProvider>
          <Header />
        </GeneralDataContextProvider>
      </LoginAuthProvider>
    </div>
  );
}

export default App;
