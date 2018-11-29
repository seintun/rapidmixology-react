import React, { Component } from 'react'
import OrderProgressBar from './OrderProgressBar'
import OrderNavigationFooter from './OrderNavigationFooter'

import CustomizeDrink from './CustomizeDrink'

export default class OrderFlow extends Component {
  render() {
    return (
      <div>
        <OrderProgressBar />

        <CustomizeDrink />
        
        <OrderNavigationFooter />
      </div>
    )
  }
}
