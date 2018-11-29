import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <Menu.Item>
          Welcome to Rapid Mixology!
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='user plus' />
          Register
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='lock open' />
          Log-In
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
