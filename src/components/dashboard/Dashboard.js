import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderFlowDisplay } from './dashboard.actions'
import OrderFlow from '../orders/OrderFlow'

import Register from '../auth/Register'
import Login from '../auth/Login'
class Dashboard extends Component {
  
  render() {
    return (
      <div>
        <button onClick={this.props.toggleOFD}>Click Me</button>

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