import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class OrderFlow extends Component {
  state= {
    tea: ''
  }

  handleChange = (event, data) => {
    const { value } = data;
    const { id } = data.options.find(o => o.value === value);
    const selectedTea = {
      id: id,
      name: value
    }
    this.setState({tea: selectedTea})

  }
  componentDidMount() {
    this.props.fetchTeas()
  }
  render() {
    return (
      <div>
        <h4>
          Tea Selection <em>(Pick one)</em>: <span> {this.state.tea.name}</span>
        </h4>
        <Dropdown placeholder='Select the tea type' 
          fluid selection options={this.props.teas} 
          onChange={this.handleChange}
        />
      </div>
  )
}
}