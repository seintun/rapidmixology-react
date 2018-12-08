import React, { Component } from 'react'
import LoggedInCheckoutAlert from '../common/alerts/LoggedInCheckout.alert'
import LoggedOutCheckoutAlert from '../common/alerts/LoggedOutCheckout.alert'
import CartItems from './CheckoutItems'
import { Segment, Button, Icon } from 'semantic-ui-react';
export default class Checkout extends Component {
  state= {}
  render() {
    const token = () => localStorage.getItem('token')
    return (
      <div>
        { token ? <LoggedInCheckoutAlert /> : <LoggedOutCheckoutAlert /> }
        <Segment>
          <Segment attached>
            <CartItems orders={ this.props.orders }/>
          </Segment>
          <Button attached='bottom' animated positive>
            <Button.Content visible>Place Order</Button.Content>
            <Button.Content hidden>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Segment>
      </div>
    )
  }
}