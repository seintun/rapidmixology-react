import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderProgressBar from '../orders/OrderProgressBar'
import OrderNavigationFooter from '../orders/OrderNavigationFooter'
import CustomizeDrink from '../orders/CustomizeDrink'
import Checkout from '../orders/Checkout'
import UserInfo from '../orders/UserInfo';
import { Segment } from 'semantic-ui-react'
import {
  customizeStep,
  userInfoStep,
  checkoutStep
} from './dashboard.actions'

class Dashboard extends Component {
  state = {
    currentStatus: this.props.currentStatus,
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
    this.setState({ 
      orders: {
        drink: { tea_id: teaInfo.id }
      }
    })
  }
  handleToppingChoice = (toppingInfo) => {
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
  handleIngredientsChoice = (ingredientsInfo) => {
    const { milk, sugar, ice } = ingredientsInfo
    this.setState({ 
      orders: {
        drink: {     	
          milk: milk,
          sugar: sugar,
          ice: ice, 
        }
      }
    })
  }
  render() {
    console.log(this.props.currentStatus, '####')
    return (
      <Segment>
        <OrderProgressBar
          orderProgressCSS={ this.props.orderProgressCSS }

          customizeStep={ this.props.customizeStep }
          userInfoStep={ this.props.userInfoStep }
          checkoutStep={ this.props.checkoutStep }
        />
    
        { this.state.currentStatus === 'customize'
          ? <CustomizeDrink 
              handleTeaChoice={ this.handleTeaChoice } 
              handleToppingChoice={ this.handleToppingChoice }
              handleIngredientsChoice={ this.handleIngredientsChoice }
            /> 
          : false }
        { this.state.currentStatus === 'userInfo'
          ? <UserInfo /> 
          : false }
        { this.state.currentStatus === 'checkout'
          ?  <Checkout /> 
          : false }
        <OrderNavigationFooter 
          status={ this.props }
        />
      </Segment>
    )
  }
}
const mapStateToProps  = state => ({
  ...state.dashboard
})

const mapDispatchToProps = dispatch => ({
  customizeStep,
  userInfoStep,
  checkoutStep  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)