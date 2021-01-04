import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Register from './components/Register'


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
