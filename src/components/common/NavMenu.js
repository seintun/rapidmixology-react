import React, { Component } from 'react'
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export default class SidebarExampleDimmed extends Component {
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
          <Menu.Item>
            <Button primary onClick={this.handleShowClick}>Menu</Button>
          </Menu.Item>
          <Menu.Item>
            <h3>Rapid Mixology</h3>
          </Menu.Item>
          {this.state.signedIn 
            ? <Menu.Item className="right" as='a' onClick={this.handleSignedIn}>
                <Icon name="log out"></Icon>
                logout
              </Menu.Item>
            : <Menu.Item className="right" as='a' onClick={this.handleSignedIn}>
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

        {this.state.signedIn ? <SignedInLinks /> :<SignedOutLinks />}

        </Sidebar>
        </div>
      </div>
    )
  }
}
