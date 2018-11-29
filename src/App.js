import React, { Component } from 'react';
import NavMenu from './components/common/NavMenu'
import OrderNavigationFooter from './components/orders/OrderNavigationFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <OrderNavigationFooter />
      </div>
    );
  }
}

export default App;