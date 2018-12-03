import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderFlowDisplay } from './dashboard.actions'
import NavMenu from '../common/NavMenu'
import Home from './Home'
import OrderFlow from '../orders/OrderFlow'

import Register from '../auth/Register'
import Login from '../auth/Login'
class Dashboard extends Component {
  
  render() {
    console.warn(this.props)
    return (
      <div>
        <NavMenu 
          dashboardDisplay = { this.props }
        />
        <button onClick={this.props.toggleOFD}>Click Me</button>
        <Home />
        { this.props.orderFlowDisplay ? <OrderFlow /> : false }
        { this.props.registerDisplay ? <Register /> : false }
        { this.props.loginDisplay ?  <Login /> : false }
      </div>
    )
  }
}
const mapStatetoProps  = state => ({
  ...state.dashboard
})

const mapDispatchtoProps = dispatch => ({
  toggleOFD: () => dispatch(orderFlowDisplay())
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Dashboard)