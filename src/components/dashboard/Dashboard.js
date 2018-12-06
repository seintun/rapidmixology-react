import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderFlowDisplay } from './dashboard.actions'
import OrderProgressBar from '../orders/OrderProgressBar'
import OrderNavigationFooter from '../orders/OrderNavigationFooter'
import CustomizeDrink from '../orders/CustomizeDrink'
import Register from '../auth/Register'
import Login from '../auth/Login'
class Dashboard extends Component {
  
  render() {
    return (
      <div>
        <OrderProgressBar />
        <button onClick={this.props.toggleOFD}>OFD</button>
        <button onClick={this.props.toggleLOGIN}>LOGIN</button>
        <button onClick={this.props.toggleREGISTER}>REGISTER</button>
    
        { this.props.orderFlowDisplay ? <CustomizeDrink /> : false }

        { this.props.registerDisplay ? <Register /> : false }
        { this.props.loginDisplay ?  <Login /> : false }
        <OrderNavigationFooter />
      </div>
    )
  }
}
const mapStateToProps  = state => ({
  ...state.dashboard
})

const mapDispatchToProps = dispatch => ({
  toggleOFD: () => dispatch(orderFlowDisplay()),
  toggleLOGIN: () => dispatch(orderFlowDisplay()),
  toggleREGISTER: () => dispatch(orderFlowDisplay())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)