import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Sleep better. Feel better. Live better.</h2>
      <div className="logInForm">
        <h2>Log In</h2>
        <p>Tracker for better sleep.</p>
        <br />

        <input
          className="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
        />
        <br />
        <br />
        <input
          className="password"
          name="password"
          type="password"
          placeholder="Enter your Password"
        />
        <br />
        <br />
        <button>Log In</button>
        <br />
        <br />
        <a href="url">
          Not a Member?
          <br />
          Sign-Up to get better sleep.
        </a>
      </div>
    </div>
  );
}

export default App;
