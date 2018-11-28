import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const OrderProgressBar = () => (
  <Step.Group size='mini' widths={3} unstackable>
    <Step completed>
      <Icon name='coffee' />
      <Step.Content>
        <Step.Title>Customize</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='key' />
      <Step.Content>
        <Step.Title>User Information</Step.Title>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='cart' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default OrderProgressBar
