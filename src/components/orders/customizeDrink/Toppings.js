import React from 'react'

const Toppings = (props) => {
  return (
    <div>
      <h5>{props.topping.text}</h5>
      <label htmlFor="">Quantity</label>
      <input type="text"/>
    </div>
  )
}

export default Toppings