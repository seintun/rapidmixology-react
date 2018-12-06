import React, { Component } from 'react'
import { connect } from 'react-redux'
import { customizeDrinkDisplay, userinfoDisplay, checkoutDisplay, fetchTeas } from './dashboard.actions'
import OrderProgressBar from '../orders/OrderProgressBar'
import OrderNavigationFooter from '../orders/OrderNavigationFooter'
import CustomizeDrink from '../orders/CustomizeDrink'
import Checkout from '../orders/Checkout'
import UserInfo from '../orders/UserInfo';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <OrderProgressBar
          toggleCUSTOMIZE={this.props.toggleCUSTOMIZE}
          toggleUSERINFO={this.props.toggleUSERINFO}
          toggleCHECKOUT={this.props.toggleCHECKOUT}
        />
    
        { this.props.customizeDrinkDisplay ? <CustomizeDrink teas={this.props.teas} fetchTeas={this.props.fetchTeas} /> : false }
        { this.props.userinfoDisplay ? <UserInfo /> : false }
        { this.props.checkoutDisplay ?  <Checkout /> : false }
        <OrderNavigationFooter 
          status={this.props}
        />
      </div>
    )
  }
}
const mapStateToProps  = state => ({
  ...state.dashboard
})

const mapDispatchToProps = dispatch => ({
  toggleCUSTOMIZE: () => dispatch(customizeDrinkDisplay()),
  toggleUSERINFO: () => dispatch(userinfoDisplay()),
  toggleCHECKOUT: () => dispatch(checkoutDisplay()),
  fetchTeas: () => dispatch(fetchTeas())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)