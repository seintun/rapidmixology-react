import React from 'react'
import { Image, Card, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const customizeDrinkImage = () => (
  <div>
    <Segment>
      <NavLink to='/orders'>
        <Image
          src='https://www.theadultman.com/wp-content/uploads/2017/03/manly-cocktails.jpg'
        />
      </NavLink>
    </Segment>
    <Segment>
      <Card.Group itemsPerRow={2}>
        <Card raised color='red' image='https://source.unsplash.com/350x350/?milk,tea' />
        <Card raised color='orange' image='https://source.unsplash.com/350x351/?milk,tea' />
        <Card raised color='yellow' image='https://source.unsplash.com/350x352/?milk,tea' />
        <Card raised color='olive' image='https://source.unsplash.com/350x353/?milk,tea' />
        <Card raised color='green' image='https://source.unsplash.com/350x354/?milk,tea' />
        <Card raised color='teal' image='https://source.unsplash.com/350x355/?milk,tea' />
        <Card raised color='blue' image='https://source.unsplash.com/350x356/?milk,tea' />
        <Card raised color='violet' image='https://source.unsplash.com/350x357/?milk,tea' />
      </Card.Group>
    </Segment>
  </div>
)

export default customizeDrinkImage