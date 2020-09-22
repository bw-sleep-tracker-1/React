import React, { useState, useEffect } from "react";
import axios from "axios";
import schema from "./validation/signSchema";
// import App from "./App";

const initialFormValues = {
  username: "",
  email: "",
  fName: "",
  lName: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  fName: "",
  lName: "",
  password: "",
};

const initialDisabled = true;

const SignUp = ({ setPost }) => {
  // const users = props.users;
  // console.log(users);
  // const setUsers = props.setUsers;
  // const formValues = props.formValues;
  // const setFormValues = props.setFormValues;
  // const formErrors = props.formErrors;
  // const setFormErrors = props.setFormErrors;
  // const disabled = props.disabled;
  // const setDisabled = props.setDisabled;
  const [user, setUser] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [errors, setFormErrors] = useState(initialFormErrors);

  const changeHandler = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    // submit();
    const newUser = {
      fName: formValues.fName.trim(),
      lName: formValues.lName.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    setUser([...user, newUser]);
    setFormValues(initialFormValues);
  };

  return (
    <>
      {user.map((prof, idx) => {
        return (
          <div key={idx}>
            {prof.fName}
            <br />
            {prof.lName}
            <br />
            {prof.username}
            <br />
            {prof.email}
            <br />
            {prof.password}
            <br />
          </div>
        );
      })}
      <form onSubmit={submitHandler}>
        <div className="App">
          <h2>Sleep better. Feel better. Live better. TODAY!</h2>
          <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.fName}</div>
            <div>{errors.lName}</div>
            <div>{errors.password}</div>
          </div>
          <div className="logInForm">
            <h2>Sign Up!</h2>
            <p>Join Sleep Tracker for better sleep.</p>
            <br />

            <input
              className="fName"
              name="fName"
              type="fName"
              value={formValues.fName}
              onChange={changeHandler}
              placeholder="Enter your First Name"
            />
            <br />
            <br />
            <input
              className="lName"
              name="lName"
              type="lName"
              value={formValues.lName}
              onChange={changeHandler}
              placeholder="Enter your Last Name"
            />
            <br />
            <br />
            <input
              className="username"
              name="username"
              type="username"
              value={formValues.username}
              onChange={changeHandler}
              placeholder="Create your User Name"
            />
            <br />
            <br />
            <input
              className="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={changeHandler}
              placeholder="Enter your Email"
            />
            <br />
            <br />
            <input
              className="password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={changeHandler}
              placeholder="Create your Password"
            />
            <br />
            <br />
            <button disabled={disabled}>Create Sleep Profile!</button>
            <div className="errors">
              <div>{errors.username}</div>
              <div>{errors.password}</div>
            </div>
            <br />
            <br />
            <a href="/">
              Already a Member?
              <br />
              Sign-In to get better sleep!
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
