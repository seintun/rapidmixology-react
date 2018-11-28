import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const teaOptions = [
  {
    text: 'Anita’s Blend (Black Tea)',
    value: 'Anita’s Blend',
    image: { avatar: true, src: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568134-stock-illustration-male-face-avatar-logo-template.jpg' },
  },
  {
    text: 'Irish Breakfast (Black Tea)',
    value: 'Irish Breakfast',
    image: { avatar: true, src: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568134-stock-illustration-male-face-avatar-logo-template.jpg' },
  },
  {
    text: 'Meyer Berry Sencha (Green Tea)',
    value: 'Meyer Berry Sencha',
    image: { avatar: true, src: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568134-stock-illustration-male-face-avatar-logo-template.jpg' },
  }
]
const TeasList = () => (
  <Dropdown placeholder='Select the tea type' fluid selection options={teaOptions} />
)

export default TeasList