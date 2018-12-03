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
            <h4>Tea Selection <em>(Pick one)</em>:</h4>
            <TeasList />
          </Segment>
          <Segment>
            <h4>Topping Selection <em>(Pick one or more)</em>:</h4>
            <ToppingsList />
          </Segment>
          <Segment>
            <Ingredients />
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
