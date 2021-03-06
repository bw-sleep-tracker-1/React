import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import formSchema from "../validation/formSchema";
import axios from "axios";
import styled, { keyframes } from "styled-components";

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

const LogIn = (props) => {
  const logInState = props.logInState;
  const setLogInState = props.setLogInState;
  const errors = props.errors;
  const setErrors = props.setErrors;
  const buttonDisabled = props.buttonDisabled;
  const post = props.post;
  const setPost = props.setPost;

  //validation

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://lambda-bw-sleep-tracker.herokuapp.com/auth/login",
        logInState
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        window.location ='/wokeform';

        setPost(response.data);
        console.log("success", response.data.token, response);

        setLogInState({
          username: "",
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
      ...logInState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setLogInState(newFormData);
  };

  return (
    <StyledForm>
      <div className="logIn">
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
              <a href="https://react-dusky.vercel.app/signup">Sign Up</a>
            </ul>
          </nav>
        </header>

        <div className="logInForm">
          <h2>Zzz.</h2>
          <p>Track a better sleep.</p>
          <br />
          <form onSubmit={formSubmit}>
            <input
              className="username"
              name="username"
              type="text"
              placeholder="User Name"
              value={logInState.username}
              onChange={inputChange}
            />
            <br />
            {errors.username.length > 0 ? (
              <p className="error">{errors.username}</p>
            ) : null}
            <br />
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={logInState.password}
              onChange={inputChange}
            />
            <br />
            {errors.password.length > 0 ? (
              <p className="error">{errors.password}</p>
            ) : null}
            <br />
            <button disabled={buttonDisabled}>Login</button>
          </form>
          <br />
          <br />
          <a href="./signup">
            Not a Member?
            <br />
            Sign-Up to get better sleep.
          </a>
        </div>

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

export default LogIn;
