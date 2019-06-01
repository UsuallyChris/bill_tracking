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

function App() {
  return (
    <BrowserRouter>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/verify/:key" component={AuthTest}/>
    </BrowserRouter>
  );
}

export default App;
