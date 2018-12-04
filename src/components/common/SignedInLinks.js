import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class SignedInLinks extends Component {
  render() {
    return (
      <div>
        <Menu.Item>
          Welcome! Sein
        </Menu.Item>
        <NavLink to='/'>
          <Menu.Item as='a'>
            <Icon name='home' /> Home
          </Menu.Item>
        </NavLink>
        <NavLink to='/history'>
          <Menu.Item as='a'>
            <Icon name='history' /> Order History
          </Menu.Item>
        </NavLink>
        <NavLink to='/setting'>
          <Menu.Item as='a'>
            <Icon name='setting' />  Settings
          </Menu.Item>
        </NavLink>
        <NavLink to='/feedback'>
          <Menu.Item as='a'>
            <Icon name='edit outline' />  Feedback
        </Menu.Item>
        </NavLink>
        <Menu.Item> Rapid Mixology <br /> © 2018 </Menu.Item>
      </div>
    )
  }
}
