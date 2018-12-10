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
  saveCustomizeDrink,
  checkoutOrder
} from './dashboard.actions'
import { userLogin } from '../auth/auth.actions'

class Dashboard extends Component {
  state = {
    userLogin: [],
    drink: {
      tea_id: null,
      milk: true,
      sugar: 1,
      ice: 1,
      total: 5.78,
      toppings: []
    }
  }
  handleTeaChoice = (teaInfo) => {
    this.setState({ 
      drink: { 
        ...this.state.drink,
        tea_id: teaInfo.id }
      }
    )
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
      drink: {
        ...this.state.drink,
        toppings: toppingList
      }
    })
  }
  handleIngredientsChoice = (ingredientsInfo) => {
    const { milk, sugar, ice } = ingredientsInfo
    this.setState({ 
      drink: {
        ...this.state.drink,
        milk: milk,
        sugar: sugar,
        ice: ice, 
      }
    })
  }
  handleSaveCustomizeDrink = () => {
    const { drink } = this.state
    this.props.saveCustomizeDrink(drink)
  }
  handleUserInfo = (userInfo) => {
    this.setState({ 
      ...this.state,
      userLogin: userInfo 
    })
  }
  handleLoginOnSubmit = () => {
    this.props.userLogin(this.state.userLogin)
  }
  handlecheckoutOrder = () => {
    let orders= {
      userId: this.props.userLogs.user.id,
      drink: this.props.drink
    }
    this.props.checkoutOrder(orders)
  }
  render() {
    // console.log(this.props, '$$$$$')
    return (
      <div>
        <Segment>
          <OrderProgressBar
            orderProgressCSS={ this.props.orderProgressCSS }

            customizeStep={ this.props.customizeStep }
            userInfoStep={ this.props.userInfoStep }
            checkoutStep={ this.props.checkoutStep }
            handleSaveCustomizeDrink={ this.handleSaveCustomizeDrink }
            handleLoginOnSubmit={ this.handleLoginOnSubmit }
          />
      
          { this.props.currentStatus === 'customize'
            ? <CustomizeDrink 
                handleTeaChoice={ this.handleTeaChoice } 
                handleToppingChoice={ this.handleToppingChoice }
                handleIngredientsChoice={ this.handleIngredientsChoice }
              /> 
            : false }
          { this.props.currentStatus === 'userInfo'
            ? <UserInfo handleUserInfo={ this.handleUserInfo } /> 
            : false }
          { this.props.currentStatus === 'checkout'
            ?  <Checkout 
                drink={ this.props.drink } 
                handlecheckoutOrder={ this.handlecheckoutOrder }
              /> 
            : false }
        </Segment>
        <OrderNavigationFooter 
          currentStatus={ this.props.currentStatus }

          customizeStep={ this.props.customizeStep }
          userInfoStep={ this.props.userInfoStep }
          checkoutStep={ this.props.checkoutStep }
          handleSaveCustomizeDrink={ this.handleSaveCustomizeDrink }
          handleLoginOnSubmit={ this.handleLoginOnSubmit }
        />
      </div>
    )
  }
}
const mapStateToProps  = state => ({
  ...state.dashboard,
  ...state.auth
})

const mapDispatchToProps = dispatch => ({
  customizeStep: () => dispatch(customizeStep()),
  userInfoStep: () => dispatch(userInfoStep()),
  checkoutStep: () => dispatch(checkoutStep()),
  saveCustomizeDrink: bindActionCreators(saveCustomizeDrink, dispatch),
  userLogin: bindActionCreators(userLogin, dispatch),
  checkoutOrder: bindActionCreators(checkoutOrder, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)