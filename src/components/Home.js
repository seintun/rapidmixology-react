import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const customizeDrinkImage = () => (
  <Container>
    <NavLink to='/orders'>
      <Image
        src='https://www.theadultman.com/wp-content/uploads/2017/03/manly-cocktails.jpg'
        as='a'
        size='medium'
      />
    </NavLink>
  </Container>
)

export default customizeDrinkImage