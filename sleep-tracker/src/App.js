import React from 'react';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {

  return (
   <>
    <Route exact path="/">
    <LogIn />
    </Route>

    <Route path="/signup">
    <SignUp />
    </Route>

  </>  

  );
}

export default App;
