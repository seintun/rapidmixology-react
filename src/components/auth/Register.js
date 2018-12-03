import React, { Component } from 'react'
import { Container, Form, Button, Message, FormGroup } from 'semantic-ui-react'

export default class Register extends Component {
  state= {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
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
        <h1>Join Us by registering here!</h1>
        <Form success>
          <Form.Group>
            <Form.Input id='firstName' label='First name' placeholder='First Name' width={8} onChange={this.handleOnChange}/>
            <Form.Input id='lastName' label='Last Name' placeholder='Last Name' width={8} onChange={this.handleOnChange}/>
          </Form.Group>
          <FormGroup>
            <Form.Input id='email' label='Email' placeholder='joe@schmoe.com' type='email' width={16} onChange={this.handleOnChange}/>
          </FormGroup>
          <FormGroup>
            <Form.Input id='userName' label='Username' placeholder='Username' width={16} onChange={this.handleOnChange}/>
          </FormGroup>
          <Form.Group>
            <Form.Input label='Password' placeholder='Password' type='password' width={8} />
            <Form.Input id='password' label='Confirm Password' type='password' placeholder='Confirm Password' width={8} onChange={this.handleOnChange}/>
          </Form.Group>
          <Form.Field control={ Button } onClick={ this.handleOnSubmit }>Submit</Form.Field>
          <Message success header='Registration Completed' content="You're all signed up!" />
          <Message warning header='Missing data entry!' content='One or more fields is missing data, please filled them completely.'/>
          <Message error header='Action Forbidden!' content='Your username is taken! Please try a different one.'/>
        </Form>
      </Container>
    )
  }
}