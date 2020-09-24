import React from "react";
// import { useHistory } from "react-router-dom";
import * as yup from "yup";
import signSchema from "../validation/signSchema";
// import axiosWithAuth from '../components/axiosWithAuth'
import axios from "axios";
import styled, { keyframes } from "styled-components";
// styled components
const kf = keyframes`
50% {
  transform: scale(0.8);
}
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const StyledForm = styled.div`
  opacity: 0;
  transform: scale(2);
  animation: ${kf} 2s forwards;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
      }
      button {
    transition: all 0.8s ease-in-out;
    &:hover {
      transition: all 0.8s ease-in-out;
    }
  }
    a {
    transition: all 0.8s ease-in-out;
    &:hover {
      transition: all 0.8s ease-in-out;
    }
  }
`;



const SignUp = (props) => {
  const newUserState = props.newUserState;
  const setNewUserState = props.setNewUserState;
  const formError = props.formError;
  const setFormError = props.setFormError;
  const buttDisabled = props.buttDisabled;
  const userPost = props.userPost;
  const setUserPost = props.setUserPost;
  //validation
  const validateChange = (e) => {
    yup
      .reach(signSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setFormError({
          ...formError,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setFormError({
          ...formError,
          [e.target.name]: err.errors[0], /// this need to say "errors"
        });
      });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://lambda-bw-sleep-tracker.herokuapp.com/auth/signup",
        newUserState
      )
      .then((response) => {
        setUserPost(response.data);
        console.log("success", userPost);
        setNewUserState({
          username: "",
          email: "",
          first_name: "",
          last_name: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...newUserState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setNewUserState(newFormData);
  };
  return (
    <StyledForm>
      <div className="signUp">
        <header>
        <h1><img src="https://i.imgur.com/i9SkgxT.png" alt="logo" width="100" height="80"/></h1>
          <nav>
            <ul>
              <a href="https://quizzical-hermann-5f0d21.netlify.app/index.html">
                Home
              </a>
            </ul>
            <ul>
              <a href="https://quizzical-hermann-5f0d21.netlify.app/about.html">
                About
              </a>
            </ul>
            <ul>
              <a href="https://react-dusky.vercel.app/">Login</a>
            </ul>
          </nav>
        </header>
        <div className="signUpForm">
          <h2>Sign-Up!</h2>
          <p>Track a better sleep.</p>
          <br />
          <form onSubmit={formSubmit}>
            <input
              className="username"
              name="username"
              type="text"
              placeholder="User Name"
              value={newUserState.username}
              onChange={inputChange}
            />
            <br />
            {formError.username.length > 0 ? (
              <p className="error">{formError.username}</p>
            ) : null}
            <br />
            <input
              className="email"
              name="email"
              type="email"
              placeholder="Email"
              value={newUserState.email}
              onChange={inputChange}
            />
            <br />
            {formError.email.length > 0 ? (
              <p className="error">{formError.email}</p>
            ) : null}
            <br />
            <input
              className="first_name"
              name="first_name"
              type="text"
              placeholder="First Name"
              value={newUserState.first_name}
              onChange={inputChange}
            />
            <br />
            {formError.first_name.length > 0 ? (
              <p className="error">{formError.first_name}</p>
            ) : null}
            <br />
            <input
              className="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={newUserState.last_name}
              onChange={inputChange}
            />
            <br />
            {formError.last_name.length > 0 ? (
              <p className="error">{formError.last_name}</p>
            ) : null}
            <br />
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={newUserState.password}
              onChange={inputChange}
            />
            <br />
            {formError.password.length > 0 ? (
              <p className="error">{formError.password}</p>
            ) : null}
            <br />
            <button disabled={buttDisabled}>Submit</button>
          </form>
          <br />
          <br />
          <a href="./">
            Already a Member?
            <br />
            Log-In here.
          </a>
        </div>
        {/* <pre>{JSON.stringify(newUserState, null, 2)}</pre> */}
        <footer>
          <p2>
          Info@SleepTracker.com<br/>
            <br /> Special Thanks to
            <br /> Lambda School Build Team!
            <br />© 2020 Sleep Tracker, LLC
          </p2>
        </footer>
      </div>
    </StyledForm>
  );
};
export default SignUp;