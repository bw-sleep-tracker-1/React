import React, { useState, useEffect } from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import schema from "./components/validation/signSchema";

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

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      })
      .finally(() => {
        // this woudl be tbe good spot to clean the form
      });
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)

      .validate(value)

      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      fName: formValues.fName.trim(),
      lName: formValues.lName.trim(),
    };

    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <Route exact path="/">
        <LogIn />
      </Route>

      <Route path="/SignUp">
        <SignUp
          users={users}
          setUsers={setUsers}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          disabled={disabled}
          setDisabled={setDisabled}
        />
      </Route>
    </>
  );
}

export default App;
