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
    toppings: []
  }

  handleChange = (event, data) => {
    console.log(data, this.state, '#####')
    this.setState({toppings: data.value}, () => {console.log(this.state, '####')})

  }
  handleCheck = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Dropdown placeholder='Select any Toppings' fluid multiple selection options={this.state.toppingOptions} onChange={this.handleChange}/>
        <ul>
          {this.state.toppings.map(topping => {
            let top = this.state.toppingOptions.find(toppingFinder => {
              return toppingFinder.value === topping
            })
            console.log(top, 'FIND ME')
            return(<Topping key={top.id} topping={ top }/>)
            })}
        </ul>
      </div> 
    )
  }
}