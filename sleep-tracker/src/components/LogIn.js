import React from 'react';
import * as yup from 'yup';
import formSchema from '../validation/formSchema';
import axios from 'axios'



const LogIn = (props) => {

    const logInState = props.logInState;
    const setLogInState = props.setLogInState;
    const errors = props.errors;
    const setErrors = props.setErrors;
    const buttonDisabled = props.buttonDisabled;
    const post = props.post;
    const setPost = props.setPost;



//validation
const validateChange = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,[e.target.name] : ""
      });
    })
  .catch(err => {
      setErrors({
          ...errors,[e.target.name] : err.errors[0]
      });
  });
};

// OnSubmit
const formSubmit = event => {
    event.preventDefault();
    axios.post('https://reqres.in/api/users', logInState)
    .then(response => {
        setPost(response.data);
        console.log("success",post);
        
        setLogInState({
            username: "",
            password: "",
        })
    })
    .catch( err => {
        console.log(err.response)
    })
};

const inputChange = event => {
    event.persist();
    const newFormData = {
      ...logInState, [event.target.name] : event.target.type === 
      "checkbox" ? event.target.checked : event.target.value
    };
    validateChange(event);
    setLogInState(newFormData);
  };





  return (
    <div className="logIn">

        
            <header>
                <h1>.logo</h1>
                <nav>
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Sign Up</ul>
                </nav>
            </header>
       
       
        <div className="logInForm">
            <h2>Zzz.</h2>
            <p>Track a better sleep.</p>
            <br/>
               <form onSubmit={formSubmit}>
               <input 
               className='username' 
               name='username' 
               type='text'
               value={logInState.username}
               onChange={inputChange} 
               placeholder='User Name'/><br/>
               {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
               <br/>
               <input 
               className='password' 
               name='password' 
               type='password'
               value={logInState.password}
               onChange={inputChange} 
               placeholder='Password'/><br/>
               {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
               <br/>
               <button disabled={buttonDisabled}>Log In</button>
               <br/>
               <br/>
               <a href="./SignUp">Not a Member?<br/>
               Sign-Up to get better sleep.
               </a>
               </form> 
        </div>

    </div>
  );
}

export default LogIn;