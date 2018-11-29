import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class SignedInLinks extends Component {
  render() {
    return (
      <div>
        <Menu.Item>
          Welcome! Sein
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='history' />
          Order History
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='user' />
          Profile
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='setting' />
          Settings
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='edit outline' />
          Feedback
        </Menu.Item>
        <Menu.Item>
          Rapid Mixology <br />
          © 2018
        </Menu.Item>
      </div>
    )
  }
}
