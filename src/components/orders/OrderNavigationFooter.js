import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class OrderNavigationFooter extends Component {
  render() {
    const { 
      customizeDrinkDisplay, 
      userinfoDisplay, 
      checkoutDisplay, 
      toggleCUSTOMIZE, 
      toggleUSERINFO, 
      toggleCHECKOUT 
    } = this.props.status
    return (
      <div>
        <Menu fixed='bottom' inverted>
          <Menu.Item 
            icon='left chevron' 
            content='Back' as='a' />
          <Menu.Item 
            position='right'
            icon='right chevron' 
            content='Forward' as='a' />
        </Menu>
      </div>
    )
  }
}