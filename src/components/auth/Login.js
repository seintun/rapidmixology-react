import React, { Component } from 'react'
import { Container, Form, Button, FormGroup } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { userLogin } from './auth.actions'
import { bindActionCreators } from 'redux'
import LoggedOutCheckoutAlert from '../common/alerts/LoggedOutCheckout.alert'
class Login extends Component {
  state= {
    userName: '',
    password: '',
  }
  handleOnChange = async (e) => {
    const userInfo = { 
      [e.target.id]: e.target.value 
    }
    await this.setState(userInfo)
    this.props.handleUserInfo(this.state)
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.userLogin(this.state)
  }
  
  render() {
    const token = () => localStorage.getItem('token')
    return (
      <div>
        <Container>
        { token ? true : <LoggedOutCheckoutAlert /> }
          <h1>Log In here!</h1>
          <Form>
            <FormGroup>
              <Form.Input id='userName' label='Username' placeholder='username' type='text' width={8} 
              onChange={this.handleOnChange}/>
              <Form.Input id='password' label='Password' type='password' placeholder='Confirm Password' width={8}
              onChange={this.handleOnChange}/>
            </FormGroup>
            { token ? true : <Form.Field control={ Button } onClick={ this.handleOnSubmit }>Submit</Form.Field> }
            
          </Form>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: bindActionCreators(userLogin, dispatch)
})
const mapStateToProps = state => ({
  ...state.auth
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login)
