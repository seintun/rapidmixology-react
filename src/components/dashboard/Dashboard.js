import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OrderProgressBar from '../orders/OrderProgressBar'
import OrderNavigationFooter from '../orders/OrderNavigationFooter'
import CustomizeDrink from '../orders/CustomizeDrink'
import Checkout from '../orders/Checkout'
import UserInfo from '../orders/UserInfo';
import { Segment } from 'semantic-ui-react'
import {
  customizeStep,
  userInfoStep,
  checkoutStep,
  saveCustomizeDrink
} from './dashboard.actions'

class Dashboard extends Component {
  state = {
    orders: {
      "userId": null,
      "drink": {
        "tea_id": null,
        "milk": true,
        "sugar": 1,
        "ice": 1,
        "total": 5.78,
        "toppings": []
      }
    }
  }
  handleTeaChoice = (teaInfo) => {
    this.setState({ 
      orders: {
        drink: { 
          ...this.state.orders.drink,
          tea_id: teaInfo.id }
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
          ...this.state.orders.drink,
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
          ...this.state.orders.drink,
          milk: milk,
          sugar: sugar,
          ice: ice, 
        }
      }
    })
  }
  handleSaveCustomizeDrink = () => {
    const orderInfo = this.state
    this.props.saveCustomizeDrink(orderInfo)
  }
  render() {
    return (
      <Segment>
        <OrderProgressBar
          orderProgressCSS={ this.props.orderProgressCSS }

          customizeStep={ this.props.customizeStep }
          userInfoStep={ this.props.userInfoStep }
          checkoutStep={ this.props.checkoutStep }
          handleSaveCustomizeDrink={ this.handleSaveCustomizeDrink }
        />
    
        { this.props.currentStatus === 'customize'
          ? <CustomizeDrink 
              handleTeaChoice={ this.handleTeaChoice } 
              handleToppingChoice={ this.handleToppingChoice }
              handleIngredientsChoice={ this.handleIngredientsChoice }
            /> 
          : false }
        { this.props.currentStatus === 'userInfo'
          ? <UserInfo /> 
          : false }
        { this.props.currentStatus === 'checkout'
          ?  <Checkout /> 
          : false }
        <OrderNavigationFooter 
          currentStatus={ this.props.currentStatus }

          customizeStep={ this.props.customizeStep }
          userInfoStep={ this.props.userInfoStep }
          checkoutStep={ this.props.checkoutStep }
          handleSaveCustomizeDrink={ this.handleSaveCustomizeDrink }
        />
      </Segment>
    )
  }
}
const mapStateToProps  = state => ({
  ...state.dashboard
})

const mapDispatchToProps = dispatch => ({
  customizeStep: () => dispatch(customizeStep()),
  userInfoStep: () => dispatch(userInfoStep()),
  checkoutStep: () => dispatch(checkoutStep()),
  saveCustomizeDrink: bindActionCreators(saveCustomizeDrink, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)