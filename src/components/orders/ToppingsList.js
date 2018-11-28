import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const toppingOptions = [
  { key: 'Boba', text: 'Boba', value: 'Boba' },
  { key: 'pudding', text: 'Pudding', value: 'pudding' },
  { key: 'natajelly', text: 'Nata Jelly', value: 'natajelly' },
  { key: 'mungbean', text: 'Mung Bean', value: 'mungbean' },
  { key: 'herbaljelly', text: 'Herbal Jelly', value: 'herbaljelly' },
  { key: 'grapepb', text: 'Grape Popping Bubbles', value: 'grapepb' },
  { key: 'mangopb', text: 'Mango Popping Bubbles', value: 'mangopb' },
  { key: 'coffeepb', text: 'Coffee Popping Bubbles', value: 'coffeepb' },
  { key: 'aloejelly', text: 'Aloe Jelly', value: 'aloejelly' },
  { key: 'figjelly', text: 'Fig Jelly', value: 'figjelly' },
]

const ToppingsList = () => (
  <Dropdown placeholder='Select any Toppings' fluid multiple selection options={toppingOptions} />
)

export default ToppingsList