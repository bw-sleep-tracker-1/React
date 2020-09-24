import React from "react";
// import { useHistory } from "react-router-dom";
import * as yup from "yup";
import signSchema from "../validation/signSchema";
// import axiosWithAuth from '../components/axiosWithAuth'
import axios from "axios";

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
    <div className="signUp">
      <header>
        <h1>.Logo</h1>
        <nav>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Sign-In</ul>
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
            <p className="error">{formError.email}</p>
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
          <button disabled={buttDisabled}>Log In</button>
        </form>
        <br />
        <br />
        <a href="./">
          Already a Member?
          <br />
          Log-In here.
        </a>
      </div>
      <pre>{JSON.stringify(newUserState, null, 2)}</pre>
    </div>
  );
};

export default SignUp;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import signSchema from "../validation/signSchema";
// import * as yup from "yup";
// // import App from "./App";

// // const initialFormValues = {
// //   username: "",
// //   email: "",
// //   fName: "",
// //   lName: "",
// //   password: "",
// // };

// // const initialFormErrors = {
// //   username: "",
// //   email: "",
// //   fName: "",
// //   lName: "",
// //   password: "",
// // };

// // const initialDisabled = true;

// const SignUp = (props) => {
//   const users = props.users;
//   console.log(users);
//   const setUsers = props.setUsers;
//   // const formValues = props.formValues;
//   // const setFormValues = props.setFormValues;
//   const formErrors = props.formErrors;
//   const setFormErrors = props.setFormErrors;
//   const disabled = props.disabled;
//   const setDisabled = props.setDisabled;
//   const userPost = props.userPost;
//   const setUserPost = props.setUserPost;

//   const validateChange = (e) => {
//     yup
//       .reach(signSchema, e.target.name)
//       .validate(e.target.value)
//       .then((valid) => {
//         setFormErrors({
//           ...formErrors,
//           [e.target.name]: "",
//         });
//       })
//       .catch((err) => {
//         setFormErrors({
//           ...formErrors,
//           [e.target.name]: err.errors[0],
//         });
//       });
//   };

//   const formSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post(
//         "https://lambda-bw-sleep-tracker.herokuapp.com/auth/signup",
//         userPost
//       )
//       .then((response) => {
//         setUsers(response.data);
//         console.log("success", userPost);

//         setUserPost({
//           username: "",
//           email: "",
//           fName: "",
//           lName: "",
//           password: "",
//         });
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };

//   const inputChange = (event) => {
//     event.persist();
//     const newFormData = {
//       ...userPost,
//       [event.target.name]:
//         event.target.type === "checkbox"
//           ? event.target.checked
//           : event.target.value,
//     };
//     validateChange(event);
//     setUserPost(newFormData);
//   };

//   return (
//     <>
//       <form onSubmit={formSubmit}>
//         <div className="signUp">
//           <h2>Sleep better. Feel better. Live better. TODAY!</h2>
//           {/* <div className="errors">
//             <div>{formErrors.username}</div>
//             <div>{formErrors.email}</div>
//             <div>{formErrors.fName}</div>
//             <div>{formErrors.lName}</div>
//             <div>{formErrors.password}</div>
//           </div> */}
//           <div className="logInForm">
//             <h2>Sign Up!</h2>
//             <p>Join Sleep Tracker for better sleep.</p>
//             <br />

//             <input
//               className="fName"
//               name="fName"
//               type="text"
//               value={users.fName}
//               onChange={inputChange}
//               placeholder="Enter your First Name"
//             />
//             <br />
//             {/* {formErrors.fname.length > 0 ? (
//               <p className="error">{formErrors.fname}</p>
//             ) : null} */}
//             <br />
//             <input
//               className="lName"
//               name="lName"
//               type="text"
//               value={users.lName}
//               onChange={inputChange}
//               placeholder="Enter your Last Name"
//             />
//             <br />
//             {/* {formErrors.lname.length > 0 ? (
//               <p className="error">{formErrors.lname}</p>
//             ) : null} */}
//             <br />
//             <input
//               className="username"
//               name="username"
//               type="text"
//               value={users.username}
//               onChange={inputChange}
//               placeholder="Create your User Name"
//             />
//             <br />
//             {formErrors.username.length > 0 ? (
//               <p className="error">{formErrors.username}</p>
//             ) : null}
//             <br />
//             <input
//               className="email"
//               name="email"
//               type="email"
//               value={users.email}
//               onChange={inputChange}
//               placeholder="Enter your Email"
//             />
//             <br />
//             {formErrors.email.length > 0 ? (
//               <p className="error">{formErrors.email}</p>
//             ) : null}
//             <br />
//             <input
//               className="password"
//               name="password"
//               type="password"
//               value={users.password}
//               onChange={inputChange}
//               placeholder="Create your Password"
//             />
//             <br />
//             {formErrors.password.length > 0 ? (
//               <p className="error">{formErrors.password}</p>
//             ) : null}
//             <br />
//             <button disabled={setDisabled}>Create Sleep Profile!</button>

//             <br />
//             <br />
//             <a href="/">
//               Already a Member?
//               <br />
//               Sign-In to get better sleep!
//             </a>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignUp;
