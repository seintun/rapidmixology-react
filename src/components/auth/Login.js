import React, { Component } from 'react'
import { Container, Form, Button, Message, FormGroup } from 'semantic-ui-react'
import { userLogin } from './auth.actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends Component {
  state= {
    userName: '',
    password: '',
  }
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.userLogin(this.state)
  }
  
  render() {
    console.log(this.state, '@@@')
    return (
      <Container>
        <h1>Log In here!</h1>
        <Form success warning error>
          <FormGroup>
            <Form.Input id='userName' label='Username' placeholder='username' type='text' width={8} onChange={this.handleOnChange}/>
            <Form.Input id='password' label='Password' type='password' placeholder='Confirm Password' width={8} onChange={this.handleOnChange}/>
          </FormGroup>
          <Form.Field control={ Button } onClick={ this.handleOnSubmit }>Submit</Form.Field>
          <Message success header='Successfully logged in'/>
          <Message warning header='Missing data entry!' content='One or more fields is missing data, please filled them completely.'/>
          <Message error header='Action Forbidden!' content='Incorrect email or password!'/>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: bindActionCreators(userLogin, dispatch)
})

export default connect(
  null, 
  mapDispatchToProps
)(Login)
