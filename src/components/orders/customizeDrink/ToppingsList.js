import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import Topping from './Toppings'

export default class ToppingsList extends Component {
  state = {
    toppingOptions : [
      { id: '1', text: 'Boba', value: 'Boba' },
      { id: '2', text: 'Pudding', value: 'pudding' },
      { id: '3', text: 'Nata Jelly', value: 'natajelly' },
      { id: '4', text: 'Mung Bean', value: 'mungbean' },
      { id: '5', text: 'Herbal Jelly', value: 'herbaljelly' },
      { id: '6', text: 'Grape Popping Bubbles', value: 'grapepb' },
      { id: '7', text: 'Mango Popping Bubbles', value: 'mangopb' },
      { id: '8', text: 'Coffee Popping Bubbles', value: 'coffeepb' },
      { id: '9', text: 'Aloe Jelly', value: 'aloejelly' },
      { id: '10', text: 'Fig Jelly', value: 'figjelly' },
    ],
    toppings: [],
    selectedToppings: []
  }

  handleChange = (event, data) => {
    this.setState({ selectedToppings: data.value });
    let toppings = data.value.map(val => {
      let top =  this.state.toppingOptions.find(top => top.value === val);
      top.quantity = 0;
      return top;
    })
    this.setState({toppings});
  }

  handleCheck = (e) => {
    e.preventDefault();
  }

  handleQuantity = (toppingId, quantity) => {
    this.state.toppings.forEach(top => {
      if (top.id === toppingId) return top.quantity = quantity;
    })
    this.setState({ toppings : this.state.toppings}, () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <Dropdown placeholder='Select any Toppings' 
          fluid multiple selection 
          options={this.state.toppingOptions} 
          onChange={this.handleChange}
        />
      <div>
        {this.state.toppings.map(topping => {
          return <Topping key={topping.id} topping={ topping } updateQuantity={this.handleQuantity} />
        })}
      </div>
      </div> 
    )
  }
}