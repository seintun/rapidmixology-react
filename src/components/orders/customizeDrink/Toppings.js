import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

const Toppings = (props) => {
  const { topping : { text, id, quantity }, updateQuantity } = props;
  return (
    <Segment>
      <h5> {text} serving of {quantity}</h5>
      <Button.Group>
        <Button className={`${ quantity === 1 ? 'primary': ''}`} onClick={() => updateQuantity(id, 1)}>One</Button>
        <Button.Or />
        <Button className={`${ quantity === 2 ? 'primary': ''}`} onClick={() => updateQuantity(id, 2)}>Two</Button>
        <Button.Or />
        <Button className={`${ quantity === 3 ? 'primary': ''}`} onClick={() => updateQuantity(id, 3)}>Three</Button>
      </Button.Group>
    </Segment>
  )
}
export default Toppings