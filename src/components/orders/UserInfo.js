import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Register from '../auth/Register'
import Login from '../auth/Login'

export default class UserInfo extends Component {
  state = { register: false }

  handleItemClick = () => this.setState({ register: !this.state.register })

  render(){
    const { register } = this.state
    return (
      <Segment>
        <Menu attached='top' tabular>
          <Menu.Item 
            name='Login' 
            active={register === false} 
            onClick={this.handleItemClick} />
          <Menu.Item
            name='Not Registered'
            active={register === true}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment attached='bottom'>
          { this.state.register ? <Login /> : <Register /> }
        </Segment>
      </Segment>
    )
  }
}
