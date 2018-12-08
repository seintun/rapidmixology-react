import React from 'react'
import { Message } from 'semantic-ui-react'

const LoggedOutCheckoutAlert = () => (
  <Message negative>
    <Message.Header>You are not logged in!</Message.Header>
    <p>Please login to complete your order.</p>
  </Message>
)

export default LoggedOutCheckoutAlert