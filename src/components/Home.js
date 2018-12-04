import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const ImageExampleLink = () => (
  <Container>
    <NavLink to='/orders'>
      <Image
        src='https://www.personalizationmall.com/cat_image/300/14132-31727-160411090354.jpg'
        as='a'
        size='medium'
      />
    </NavLink>
  </Container>
)

export default ImageExampleLink