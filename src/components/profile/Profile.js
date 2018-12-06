import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

const extra = (
  <div>
    <Icon name='user' />
    Infinity Friends
  </div>
)

const UserProfile = ({ user }) => {
  return (
  <Card
    image='https://jooinn.com/images/portrait-102.jpg'
    header= {`${user.firstName} ${user.lastName}`}
    meta='Friend'
    description='Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science.'
    extra={extra}
  />
  )
}

const mapStateToProps = state => ({
  user: state.auth.user.userLoggedIn
})

export default connect(
  mapStateToProps, 
  null
)(UserProfile)