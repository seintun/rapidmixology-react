import React from 'react'
import { Message } from 'semantic-ui-react'

const LoggedInCheckoutAlert = () => (
  <Message positive>
    <Message.Header>Ready to checkout!</Message.Header>
    <p>
      You are already logged in. <br />
      Please review your order details and checkout.
    </p>
  </Message>
)

export default LoggedInCheckoutAlert