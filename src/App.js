import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavMenu from './components/common/NavMenu'
import Dashboard from './components/dashboard/Dashboard'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <Route exact path='/' component={ Dashboard } />
          <Route path='/register' component={ Register } />
          <Route path='/login' component={ Login } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;