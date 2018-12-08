import React, { Component } from 'react'
import LoggedInCheckoutAlert from '../common/alerts/LoggedInCheckout.alert'
import LoggedOutCheckoutAlert from '../common/alerts/LoggedOutCheckout.alert'
export default class Checkout extends Component {
  state= {}
  render() {
    const token = () => localStorage.getItem('token')
    return (
      <div>
        { token ? <LoggedInCheckoutAlert /> : <LoggedOutCheckoutAlert /> }
      </div>
    )
  }
}