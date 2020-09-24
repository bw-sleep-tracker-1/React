import React, { useState, useEffect } from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/Signup";
import { Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import signSchema from "./validation/signSchema";
// import schema from "./components/validation/signSchema";
import "./App.css";

//signup Form

// const initialFormValues = {
//   username: "",
//   email: "",
//   fName: "",
//   lName: "",
//   password: "",
// };

// const initialFormErrors = {
//   username: "",
//   email: "",
//   fName: "",
//   lName: "",
//   password: "",
// };

// const initialUsers = [];
// const initialDisabled = true;

const App = () => {
  const [newUserState, setNewUserState] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  // const [formValues, setFormValues] = useState({

  // });

  const [formError, setFormError] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const [buttDisabled, setButtDisabled] = useState(true);

  useEffect(() => {
    signSchema.isValid(newUserState).then((valid) => {
      setButtDisabled(!valid);
    });
  }, [newUserState]);

  const [userPost, setUserPost] = useState([]);

  //    const getUsers = () => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //       console.log(err);
  //     });
  // };

  // const postNewUser = (newUser) => {
  //   axios
  //     .post("https://reqres.in/api/users", newUser)
  //     .then((res) => {
  //       setUsers([...users, res.data]);
  //       setFormValues(initialFormValues);
  //     })
  //     .catch((err) => {
  //       debugger;
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       // this woudl be tbe good spot to clean the form
  //     });
  // };

  // const validate = (name, value) => {
  //   yup
  //     .reach(schema, name)

  //     .validate(value)

  //     .then((valid) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: "",
  //       });
  //     })

  //     .catch((err) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: err.errors[0],
  //       });
  //     });
  // };

  // const inputChange = (name, value) => {
  //   validate(name, value);
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const formSubmit = () => {
  //   const newUser = {
  //     username: formValues.username.trim(),
  //     email: formValues.email.trim(),
  //     password: formValues.password.trim(),
  //     fName: formValues.fName.trim(),
  //     lName: formValues.lName.trim(),
  //   };

  //   postNewUser(newUser);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

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
          // formValues={formValues}
          // setFormValues={setFormValues}
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
