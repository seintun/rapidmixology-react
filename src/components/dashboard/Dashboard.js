import React, { Component } from 'react'
import NavMenu from '../common/NavMenu'
import OrderFlow from '../orders/OrderFlow'

import Register from '../auth/Register'
import Login from '../auth/Login'
export default class Dashboard extends Component {
  state= {
    registerDisplay: false,
    loginDisplay: false,
    orderFlowDisplay: true
  }
  render() {
    return (
      <div>
        <NavMenu 
          dashboardDisplay = { this.state }
        />
        { this.state.orderFlowDisplay ? <OrderFlow /> : false }
        { this.state.registerDisplay ? <Register /> : false }
        { this.state.loginDisplay ?  <Login /> : false }
      </div>
    )
  }
}