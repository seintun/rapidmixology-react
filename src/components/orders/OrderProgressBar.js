import React, { Component } from 'react'
import { Icon, Step } from 'semantic-ui-react'

export default class OrderProgressBar extends Component {
  render(){
    return(
      <div>
        <Step.Group size='mini' widths={3} unstackable>
          <Step completed={ this.props.customizeDrinkDisplay ? true : false } as='a' onClick={ this.props.toggleCUSTOMIZE }>
            <Icon name='coffee' />
            <Step.Content>
              <Step.Title>Customize Drink</Step.Title>
            </Step.Content>
          </Step>
          <Step active={ this.props.userinfoDisplay ? true : false } as='a' onClick={ this.props.toggleUSERINFO }>
            <Icon name='key' />
            <Step.Content>
              <Step.Title>User Information</Step.Title>
            </Step.Content>
          </Step>
          <Step disabled={ this.props.checkoutDisplay ? true : false } as='a' onClick={ this.props.toggleCHECKOUT }>
            <Icon name='cart' />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
    )
  }
}
