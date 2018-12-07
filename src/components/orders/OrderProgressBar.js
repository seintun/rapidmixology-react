import React, { Component } from 'react'
import { Icon, Step } from 'semantic-ui-react'

export default class OrderProgressBar extends Component {
  state = {
    
  }
  // currentDisplay = () => {
  //   switch (this.state.currentStatus) {
  //     case 'customize':
  //       this.props.customizeStep();
  //       break;
  //     case 'userInfo':
  //     this.props.userInfoStep();
  //     break;
  //     case 'checkout':
  //       this.props.checkoutStep();
  //       break;
  //     default:
  //       return `default`;
  //   }
  // }
  render(){
    return(
      <div>
        <Step.Group size='mini' widths={3} unstackable>
          <Step 
            as='a'
            completed={ this.props.orderProgressCSS.customize ? true : false } 
            onClick={ this.props.customizeStep }
          >
            <Icon name='coffee' />
            <Step.Content>
              <Step.Title>Customize Drink</Step.Title>
            </Step.Content>
          </Step>
          <Step 
            as='a' 
            completed={ this.props.orderProgressCSS.userInfo ? true : false } 
            onClick={ this.props.userInfoStep }
          >
            <Icon name='key' />
            <Step.Content>
              <Step.Title>User Information</Step.Title>
            </Step.Content>
          </Step>
          <Step 
            as='a' 
            completed={ this.props.orderProgressCSS.checkout ? true : false } 
            onClick={ this.props.checkoutStep }
          >
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
