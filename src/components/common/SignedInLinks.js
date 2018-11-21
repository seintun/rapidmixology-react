import React from 'react'
import { Icon } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/'><Icon>view_module</Icon></NavLink></li>
      <li><NavLink to='/'><Icon>power_settings_new</Icon></NavLink></li>
    </ul>
  )
}

export default SignedInLinks