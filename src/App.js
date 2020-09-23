import React, { useState, useEffect } from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/Signup";
import { Route } from "react-router-dom";
// import axios from "axios";
// import * as yup from "yup";
import formSchema from "./validation/formSchema";
import signSchema from "./validation/signSchema";
import "./App.css";




const App = () => {


  //sign up form state 

const initialDisabled = true;



// initial state
  const [users, setUsers] = useState({
    username: "",
    email: "",
    fName: "",
    lName: "",
    password: "",
  });


  //state for errors
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    fName: "",
    lName: "",
    password: "",
  });

  //button state 
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    signSchema.isValid(users).then((valid) => {
      setDisabled(!valid);
    });
  }, [users]);


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
          users={users}
          setUsers={setUsers}
          // formValues={formValues}
          // setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          disabled={disabled}
          setDisabled={setDisabled}
          userPost={userPost}
          setUserPost={setUserPost}
        />
      </Route>
    </>
  );
};

export default App;
