import React from 'react'
import OrderProgressBar from '../orders/OrderProgressBar'
import TeasList from './TeasList'
import ToppingsList from './ToppingsList'

const ContainerExampleContainer = () => (
  <div>
    <OrderProgressBar />
    <h4>Tea Selection:</h4>
    <TeasList />
    <h4>Toppings Selection:</h4>
    <ToppingsList />
  </div>
)

export default ContainerExampleContainer
