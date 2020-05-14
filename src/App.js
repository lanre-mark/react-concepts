import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./auth0/Header";
import { LoginAuthProvider } from "./auth0/now/AuthContextProvider";

const onRedirectCallback = () => {
  console.log("Please say me well to logout");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Demystifying React Concepts</h1>
      </header>
      <LoginAuthProvider onRedirectCallback={onRedirectCallback}>
        <Header />
      </LoginAuthProvider>
    </div>
  );
}

export default App;
