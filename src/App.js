import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavMenu from './components/common/NavMenu'
import Home from './components/Home'
import Feedback from './components/Feedback'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/profile/Profile'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <Route exact path='/' component={ Home } />
          <Route exact path='/feedback' component={ Feedback } />
          <Route exact path='/register' component={ Register } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/orders' component={ Dashboard } />
          <Route exact path='/profile' component={ Profile } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;