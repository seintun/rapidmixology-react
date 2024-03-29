import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <Menu.Item>
          Welcome to Rapid Mixology!
        </Menu.Item>
        <NavLink to='/'>
          <Menu.Item>
            <Icon name='home' /> Home
          </Menu.Item>
        </NavLink>
        <NavLink to='/register'>
          <Menu.Item>
            <Icon name='user plus' />
            Register
          </Menu.Item>
        </NavLink>
        <NavLink to='/login'>
          <Menu.Item>
            <Icon name='lock open' />
            Log-In
          </Menu.Item>
        </NavLink>
        <NavLink to='/feedback'>
          <Menu.Item>
            <Icon name='edit outline' />
            Feedback
          </Menu.Item>
        </NavLink>
        <Menu.Item>
          Rapid Mixology <br />
          © 2018
        </Menu.Item>
      </div>
    )
  }
}
