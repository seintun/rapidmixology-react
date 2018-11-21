import React from 'react'
import { Icon } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/'><Icon>how_to_reg</Icon></NavLink></li>
      <li><NavLink to='/'><Icon>input</Icon></NavLink></li>
    </ul>
  )
}

export default SignedOutLinks