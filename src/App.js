import React, { Component } from 'react';
import NavMenu from './components/common/NavMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <h1>Rapid Mixology</h1>
      </div>
    );
  }
}

export default App;