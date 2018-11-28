import React from 'react'
import ToppingsList from '../orders/ToppingsList'
import TeasList from '../orders/TeasList'
import Cart from '../orders/Cart'

const NavMenu = () => {
  return (
    <div>
      <h4>Nav Menu</h4>
      <ToppingsList />
      <TeasList />
      <Cart />
    </div>
  )
}

export default NavMenu