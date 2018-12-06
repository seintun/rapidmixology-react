import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderProgressBar from '../orders/OrderProgressBar'
import OrderNavigationFooter from '../orders/OrderNavigationFooter'
import CustomizeDrink from '../orders/CustomizeDrink'
import Checkout from '../orders/Checkout'
import UserInfo from '../orders/UserInfo';
import { 
  customizeDrinkDisplay, 
  userinfoDisplay, 
  checkoutDisplay, 
  fetchTeas, 
  fetchToppings 
} from './dashboard.actions'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <OrderProgressBar
          toggleCUSTOMIZE={this.props.toggleCUSTOMIZE}
          toggleUSERINFO={this.props.toggleUSERINFO}
          toggleCHECKOUT={this.props.toggleCHECKOUT}
        />
    
        { this.props.customizeDrinkDisplay 
          ? <CustomizeDrink 
            teas={this.props.teas} fetchTeas={this.props.fetchTeas}
            toppings={this.props.toppings} fetchToppings={this.props.fetchToppings}
            /> 
          : false }
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
  fetchTeas: () => dispatch(fetchTeas()),
  fetchToppings: () => dispatch(fetchToppings())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)