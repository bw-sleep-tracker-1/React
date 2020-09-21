import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { Route } from 'react-router-dom';
import formSchema from './validation/formSchema';
import './App.css';

const App = () => {

  //initial state
  const [logInState, setLogInState] = useState({

    email: "",
    password:"",

  });

  //state for Errors
  const [errors, setErrors] = useState({

    email: "",
    password:"",

  });

  //button state
const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
formSchema.isValid(logInState).then(valid => {
  setButtonDisabled(!valid)
})
},[logInState]);

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
    <SignUp />
    </Route>

  </>  

  );
}

export default App;
