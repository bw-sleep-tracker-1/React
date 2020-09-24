import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import SleepList from './components/SleepList';
import WakeForm from './components/WakeForm';

function App() {






  return (
    <Router>
      <div>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <WakeForm />
        </Route>
        <Route exact path='/sleeplist'>
          <SleepList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
