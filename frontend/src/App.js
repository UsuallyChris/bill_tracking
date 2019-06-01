import React from 'react';
import './normalize.css';
import './App.css';

// REACT ROUTER IMPORTS
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// IMPORT COMPONENTS
import Dashboard from './components/Dashboard';
import Register from './components/auth/Register';
import VerifyNewUser from './components/auth/VerifyNewUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/verify/:key" component={VerifyNewUser}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
