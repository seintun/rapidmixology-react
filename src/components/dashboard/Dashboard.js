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
  checkoutDisplay
} from './dashboard.actions'

class Dashboard extends Component {
  state = {
    orders: {
      "userId": null,
      "drink": {
        "tea_id": null,
        "milk": null,
        "sugar": null,
        "ice": null,
        "total": 5.78,
        "toppings": []
      }
    }
  }

  handleTeaChoice = (teaInfo) => {
    this.setState({ orders: {
      drink: { tea_id: teaInfo.id }
      }
    })
  }
  handleToppingChoice = (toppingInfo) => {
    console.log(toppingInfo, 'what I got????')
    let toppingList = toppingInfo.map(topping => {
      const { id, value, quantity } = topping
      const each ={ 
        id: id,
        name: value, 
        quantity: quantity
      }
      return each
    })
    this.setState({ 
      orders: {
        drink: {
          toppings: toppingList
        }
      }
    })
  }
  render() {
    console.log(this.state, 'DASHBOARD STATE')
    return (
      <div>
        <OrderProgressBar
          toggleCUSTOMIZE={ this.props.toggleCUSTOMIZE }
          toggleUSERINFO={ this.props.toggleUSERINFO }
          toggleCHECKOUT={ this.props.toggleCHECKOUT }

          customizeDrinkDisplay={ this.props.customizeDrinkDisplay }
          userinfoDisplay={ this.props.userinfoDisplay }
          checkoutDisplay={ this.props.checkoutDisplay }
        />
    
        { this.props.customizeDrinkDisplay 
          ? <CustomizeDrink handleTeaChoice={ this.handleTeaChoice } handleToppingChoice={ this.handleToppingChoice }/> 
          : false }
        { this.props.userinfoDisplay ? <UserInfo /> : false }
        { this.props.checkoutDisplay ?  <Checkout /> : false }
        <OrderNavigationFooter 
          status={ this.props }
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
  toggleCHECKOUT: () => dispatch(checkoutDisplay())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)