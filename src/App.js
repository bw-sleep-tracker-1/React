import React, { useState, useEffect } from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import formSchema from "./validation/formSchema";
import signSchema from "./validation/signSchema";
import "./App.css";

const App = () => {
  //sign up form state

  // initial state
  const [newUserState, setNewUserState] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  //state for errors
  const [formError, setFormError] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  //button state
  const [buttDisabled, setButtDisabled] = useState(true);

  useEffect(() => {
    signSchema.isValid(newUserState).then((valid) => {
      setButtDisabled(!valid);
    });
  }, [newUserState]);

  //post state
  const [userPost, setUserPost] = useState([]);

  ///log in form

  //initial state
  const [logInState, setLogInState] = useState({
    username: "",
    password: "",
  });

  //state for Errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  //button state
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(logInState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [logInState]);

  //post state
  const [post, setPost] = useState([]);

  return (
    <>
      <Route exact path="/">
        <LogIn
          logInState={logInState}
          setLogInState={setLogInState}
          errors={errors}
          setErrors={setErrors}
          buttonDisabled={buttonDisabled}
          post={post}
          setPost={setPost}
        />
      </Route>

      <Route path="/signup">
        <SignUp
          newUserState={newUserState}
          setNewUserState={setNewUserState}
          formError={formError}
          setFormError={setFormError}
          buttDisabled={buttDisabled}
          setButtDisabled={setButtDisabled}
          userPost={userPost}
          setUserPost={setUserPost}
        />
      </Route>
    </>
  );
};

export default App;
