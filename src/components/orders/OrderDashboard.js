import React from 'react'
import { Segment } from 'semantic-ui-react'
import OrderProgressBar from '../orders/OrderProgressBar'
import TeasList from './TeasList'
import ToppingsList from './ToppingsList'
import Ingredients from './Ingredients'

const ContainerExampleContainer = () => (
  <div>
    <Segment.Group>
      <OrderProgressBar />
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

export default ContainerExampleContainer
