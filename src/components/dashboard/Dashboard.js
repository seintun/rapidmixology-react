import React, { Component } from 'react'
import NavMenu from '../common/NavMenu'
import OrderFlow from '../orders/OrderFlow'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <OrderFlow />
      </div>
    )
  }
}