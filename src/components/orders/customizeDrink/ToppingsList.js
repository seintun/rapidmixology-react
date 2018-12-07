import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import Topping from './Toppings'

export default class ToppingsList extends Component {
  state = {
    toppings: [],
    selectedToppings: []
  }

  handleChange = (event, data) => {
    this.setState({ selectedToppings: data.value });
    let toppings = data.value.map(val => {
      let top =  this.props.toppings.find(top => top.value === val);
      top.quantity = 0;
      return top;
    })
    this.setState({toppings});
    this.props.handleToppingChoice(this.state.toppings)
  }
  
  handleCheck = (e) => {
    e.preventDefault();
  }

  handleQuantity = (toppingId, quantity) => {
    this.state.toppings.map(top => {
      if (top.id === toppingId) return top.quantity = quantity;
    })
    this.setState({ toppings : this.state.toppings});
    this.props.handleToppingChoice(this.state.toppings)
  }
  componentDidMount() {
    this.props.fetchToppings()
  }
  render() {
    return (
      <div>
        <Dropdown placeholder='Select any Toppings' 
          fluid multiple selection 
          options={this.props.toppings} 
          onChange={this.handleChange}
        />
        <div>
          {this.state.toppings.map(topping => {
            return <Topping 
              key={topping.id} 
              topping={ topping } 
              updateQuantity={this.handleQuantity} />
          })}
        </div>
      </div> 
    )
  }
}