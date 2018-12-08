import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class OrderNavigationFooter extends Component {
  handleForward = () => {
    const token = localStorage.getItem('token')
    switch (this.props.currentStatus) {
      case 'customize':
        this.props.handleSaveCustomizeDrink();
        token ? this.props.checkoutStep() : this.props.userInfoStep();
        break;
      case 'userInfo':
        this.props.handleLoginOnSubmit()
        this.props.checkoutStep()
        break;
      default:
        return `default`
    }
  }
  handleBack = () => {
    const token = localStorage.getItem('token')
    switch (this.props.currentStatus) {
      case 'userInfo':
        this.props.customizeStep()
        break;
      case 'checkout':
        token ? this.props.customizeStep() : this.props.userInfoStep();
        break;
      default:
        return `default`
    }
  }
  render() {
    return (
      <div>
        <Menu fixed='bottom' inverted>
          <Menu.Item 
            icon='left chevron' 
            content='Back' as='a'
            disabled={ this.props.currentStatus === 'customize' ? true : false }
            onClick={ this.handleBack }/>
          <Menu.Item 
            position='right'
            icon='right chevron' 
            content='Forward' as='a'
            disabled={ this.props.currentStatus === 'checkout' ? true : false }
            onClick={ this.handleForward }/>
        </Menu>
      </div>
    )
  }
}