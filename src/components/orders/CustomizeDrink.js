import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import TeasList from './customizeDrink/TeasList'
import ToppingsList from './customizeDrink/ToppingsList'
import Ingredients from './customizeDrink/Ingredients'

export default class CustomizeDrink extends Component {
  render(){
    return(
      <div>
        <Segment.Group>
          <Segment>
            <TeasList teas={this.props.teas} fetchTeas={this.props.fetchTeas} />
          </Segment>
          <Segment>
            <h4>Topping Selection <em>(Pick one or more)</em>:</h4>
            <ToppingsList toppings={this.props.toppings} fetchToppings={this.props.fetchToppings}/>
          </Segment>
          <Segment>
            <Ingredients />
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
