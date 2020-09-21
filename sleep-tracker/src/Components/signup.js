import React from "react";
// import App from "./App";

function SignUp() {
  return (
    <div className="App">
      <h2>Sleep better. Feel better. Live better. TODAY!</h2>
      <div className="logInForm">
        <h2>Sign Up!</h2>
        <p>Join Sleep Tracker for better sleep.</p>
        <br />

        <input
          className="fName"
          name="fName"
          type="fName"
          placeholder="Enter your First Name"
        />
        <br />
        <br />
        <input
          className="lName"
          name="lName"
          type="lName"
          placeholder="Enter your Last Name"
        />
        <br />
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
          placeholder="Create your Password"
        />
        <br />
        <br />
        <button>Sign In</button>
        <br />
        <br />
        <a href="/">
          Already a Member?
          <br />
          Sign-In to get better sleep!
        </a>
      </div>
    </div>
  );
}

export default SignUp;
