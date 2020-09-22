
import React from 'react';


function SignUp() {

  return (
    <div className="signUp">

        
            <header>
                <h1>.logo</h1>
            </header>
        
       
        <div className="signUpForm">
            <h2>Sign Up</h2>
            <p>Start Tracking your Z's.</p>
            <br/>
               <input className='username' name='username' type='text' placeholder='Create User Name'/><br/>
               <br/>
               <input className='first_name' name='first_name' type='text' placeholder='Enter your First Name'/><br/>
               <br/>
               <input className='last_name' name='last_name' type='text' placeholder='Enter your Last Name'/><br/>
               <br/>
               <input className='email' name='email' type='email' placeholder='Enter your Email'/><br/>
               <br/>
               <input className='password' name='password' type='password' placeholder='Create your Password'/><br/>
               <br/>
               <button>Create Account</button>
               <br/>
               <a href="/">Already a Member?<br/>
               Sign-In here.</a>
               
        </div>

    </div>
  );
}

export default SignUp;