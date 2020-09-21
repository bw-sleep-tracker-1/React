
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

               <input className='email' name='email' type='email' placeholder='Enter your Email'/><br/>
               <br/>
               <input className='password' name='password' type='password' placeholder='Enter your Password'/><br/>
               <br/>
               <button>Submit</button>
               <br/>
               <a href="/">Already a Member?<br/>
               Sign-In here.</a>
               
        </div>

    </div>
  );
}

export default SignUp;