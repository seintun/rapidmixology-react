import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Register from '../auth/Register'
import Login from '../auth/Login'

export default class UserInfo extends Component {
  state = { 
    register: false,
    userLogin: []
  }

  handleItemClick = () => this.setState({ register: !this.state.register })

  render(){
    return (
      <Segment>
        <Menu attached='top' tabular>
          <Menu.Item 
            name='Login' 
            active={this.state.register === false} 
            onClick={this.handleItemClick} />
          <Menu.Item
            name='Not Registered'
            active={this.state.register === true}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment attached='bottom'>
          { this.state.register ? <Register /> : <Login handleUserInfo={ this.props.handleUserInfo }/> }
        </Segment>
      </Segment>
    )
  }
}
