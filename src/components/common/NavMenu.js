import React, { Component } from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export default class SideNavBar extends Component {
  state = { 
    visible: false,
    signedIn: false
  }

  handleShowClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })
  handleSignedIn = () => this.setState({ signedIn: !this.state.signedIn })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Menu inverted>
          <Menu.Item onClick={this.handleShowClick}>
            <Icon name="bars" />
            Menu
          </Menu.Item>
          <NavLink to='/'>
            <Menu.Item>
              <h3>Rapid Mixology</h3>
            </Menu.Item>
          </NavLink>
          {this.state.signedIn 
            ? <Menu.Item className="right" onClick={this.handleSignedIn}>
                <NavLink to='/'>
                  <Icon name="log out"/>logout
                </NavLink> 
              </Menu.Item>
            : <Menu.Item className="right" onClick={this.handleSignedIn}>
                <Icon name="user secret"></Icon>
                Admin Auto
              </Menu.Item>
          }
        </Menu>
      <div>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >

        {this.state.signedIn ? <SignedInLinks /> : <SignedOutLinks />}

        </Sidebar>
        </div>
      </div>
    )
  }
}
