import React from "react";

function LogIn() {
  return (
    <div className="App">
      <div className="headerDiv">
        <header>
          <h1>Sleep better. Feel better. Live better</h1>
        </header>
      </div>

      <div className="logInForm">
        <h2>Log In</h2>
        <p>Track a better sleep.</p>
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
        <a href="./SignUp">
          Not a Member?
          <br />
          Sign-Up to get better sleep.
        </a>
      </div>
    </div>
  );
}

export default LogIn;
