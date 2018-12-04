import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavMenu from './components/common/NavMenu'
import Home from './components/dashboard/Home'
import Dashboard from './components/dashboard/Dashboard'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <Route exact path='/' component={ Home } />
          <Route exact path='/orders' component={ Dashboard } />
          <Route exact path='/register' component={ Register } />
          <Route exact path='/login' component={ Login } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;