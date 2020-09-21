import React from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Route exact path="/">
        <LogIn />
      </Route>

      <Route path="/SignUp">
        <SignUp />
      </Route>
    </>
  );
}

export default App;
