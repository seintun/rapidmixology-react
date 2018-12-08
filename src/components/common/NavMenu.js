import React, { Component } from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

class SideNavBar extends Component {
  state = { 
    visible: false,
    signedIn: false
  }

  handleShowClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })
  handleSignedIn = () => this.setState({ signedIn: !this.state.signedIn })

  render() {
    const { visible } = this.state
    const token = localStorage.getItem('token')
    return (
      <div>
        <Menu inverted>
          <Menu.Item onClick={ this.handleShowClick }>
            <Icon name="bars" />
            Menu
          </Menu.Item>
          <NavLink to='/'>
            <Menu.Item>
              <h3>Rapid Mixology</h3>
            </Menu.Item>
          </NavLink>
          { token
            ? <Menu.Item className="right" onClick={ this.handleSignedIn }>  
                <NavLink to='/'>
                  <Icon name="log out"/>logout
                  </NavLink>
              </Menu.Item>
            : <Menu.Item className="right" onClick={ this.handleSignedIn }>  
                <NavLink to='/orders'>
                  <Icon name="beer"></Icon>
                  Customize
                </NavLink>
              </Menu.Item>
          }
        </Menu>
        <Sidebar
          as={ Menu }
          animation='overlay'
          icon='labeled'
          inverted
          onHide={ this.handleSidebarHide }
          vertical
          visible={ visible }
          width='thin'
        >
          { token ? <SignedInLinks user={ this.props.user }/> : <SignedOutLinks /> }
        </Sidebar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user.userLoggedIn
})
export default connect(
  mapStateToProps
)(SideNavBar)
