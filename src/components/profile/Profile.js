import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <div>
    <Icon name='user' />
    Infinity Friends
  </div>
)

const profileCard = () => (
  <Card
    image='https://jooinn.com/images/portrait-102.jpg'
    header='El-BART El-STEIN'
    meta='Friend'
    description='Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science.'
    extra={extra}
  />
)

export default profileCard