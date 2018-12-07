import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class SignedInLinks extends Component {
  render() {
    return (
      <div>
        <Menu.Item>
          Welcome! { !this.props.user ? '' : this.props.user.firstName }
        </Menu.Item>
        <NavLink to='/'>
          <Menu.Item>
            <Icon name='home' /> Home
          </Menu.Item>
        </NavLink>
        <NavLink to='/history'>
          <Menu.Item>
            <Icon name='history' /> Order History
          </Menu.Item>
        </NavLink>
        <NavLink to='/profile'>
          <Menu.Item>
            <Icon name='user outline' />  Profile
          </Menu.Item>
        </NavLink>
        <NavLink to='/feedback'>
          <Menu.Item>
            <Icon name='edit outline' />  Feedback
        </Menu.Item>
        </NavLink>
        <Menu.Item> Rapid Mixology <br /> © 2018 </Menu.Item>
      </div>
    )
  }
}
