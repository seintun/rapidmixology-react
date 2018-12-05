import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

const Toppings = (props) => {
  return (
    <Segment>
      <h5>{props.topping.text} serving:</h5>
      <Button.Group>
        <Button>One</Button>
        <Button.Or />
        <Button>Two</Button>
        <Button.Or />
        <Button>Three</Button>
      </Button.Group>
    </Segment>
  )
}

export default Toppings