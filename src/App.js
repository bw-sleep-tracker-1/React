import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LogIn from "./components/LogIn";
import SignUp from "./components/Signup";
import formSchema from "./validation/formSchema";
import signSchema from "./validation/signSchema";

import WakeForm from './components/WokeForm';
import SleepList from './components/SleepList';
import EditForm from './components/EditForm';
import PrivateRoute from "./components/utils/PrivateRoute";

import "./logInSignUp.css";
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
    <Router>
      <Switch>
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
        <PrivateRoute exact path='/wokeform' component={WakeForm}/>
        <PrivateRoute exact path='/sleeplist' component={SleepList} />
        <PrivateRoute exact path='/editform' component={EditForm} />
      </Switch>
    </Router>
  );
};

export default App;
