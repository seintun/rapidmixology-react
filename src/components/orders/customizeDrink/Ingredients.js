import React, { Component } from 'react'
import { Label, Button, Icon, Segment } from 'semantic-ui-react'

export default class Ingredients extends Component {
  state= {
    milk: false,
    sugar: 1.00,
    ice: 1.00,
    milkStatus: 'Lactose-free milk included'
  }
  // Toggle status of milk
  handleMilkClick = () => this.state.milk === false ? this.setState({ milk: true, milkStatus: 'Do NOT add any milk' }) : this.setState({ milk: false, milkStatus: 'Lactose-free milk included' })
  // Plus or Minus sugar by increments of 0.25
  handlePlusSugarClick = () => this.state.sugar !== 2.00 ? this.setState({ sugar: (this.state.sugar + 0.25) }) : this.setState({ sugar: 2.00 })
  handleMinusSugarClick = () => this.state.sugar !== 0.00 ? this.setState({ sugar: (this.state.sugar - 0.25) }) : this.setState({ sugar: 0.00 })

  // Plus or Minus ice by increments of 0.25
  handlePlusIceClick = () => this.state.ice !== 2.00 ? this.setState({ ice: (this.state.ice + 0.25) }) : this.setState({ ice: 2.00 })
  handleMinusIceClick = () => this.state.ice !== 0.00 ? this.setState({ ice: (this.state.ice - 0.25) }) : this.setState({ ice: 0.00 })

  render() {
    return (
      <div>
        <Segment>
          <Button.Group>
            <Button animated primary onClick={ this.handleMilkClick }>
              <Button.Content visible>Click to <br/> Add or Remove Milk</Button.Content>
              <Button.Content hidden>(Lactose-free Milk)</Button.Content>
            </Button>
            <Label color='purple'>
              <h3>{ this.state.milkStatus }</h3>
            </Label>
          </Button.Group>

        </Segment>
        <Segment>
          <Button.Group>
            <Button onClick={ this.handleMinusSugarClick }>Less</Button>
            <Button.Or />
            <Button positive onClick={ this.handlePlusSugarClick }>More</Button>
            <Label>
              <Icon name='cubes' />
              Sugar Level: { this.state.sugar * 100 }%
            </Label>
          </Button.Group>
        </Segment>
        <Segment>
          <Button.Group>
            <Button onClick={this.handleMinusIceClick}>Less</Button>
            <Button.Or />
            <Button positive onClick={this.handlePlusIceClick}>More</Button>
            <Label>
              <Icon name='snowflake' />
              Ice Level: {this.state.ice * 100}%
            </Label>
          </Button.Group>
        </Segment>
      </div>
    )
  }
}
