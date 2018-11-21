import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'
import NavMenu from './components/common/NavMenu'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <h1>Rapid Mixology</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;