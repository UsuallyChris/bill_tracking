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
import AuthTest from './components/auth/AuthTest';
import Register from './components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/verify/:key" component={AuthTest}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
