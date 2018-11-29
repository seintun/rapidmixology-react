import React, { Component } from 'react'
import { Container, Form, Button, Message, FormGroup } from 'semantic-ui-react'

export default class Register extends Component {
  state= {
    email: '',
    password: '',
  }
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleOnSubmit = () => {
    console.log('Form Submitted!')
  }

  render() {
    return (
      <Container>
        <h1>Log In here!</h1>
        <Form success warning error>
          <FormGroup>
            <Form.Input id='email' label='Email' placeholder='joe@schmoe.com' type='email' width={8} onChange={this.handleOnChange}/>
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