import React from 'react'
import { Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavMenu = () => {
  return (
    <Navbar className="Navbar-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'>RapidMixology</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </Navbar>
  )
}

export default NavMenu