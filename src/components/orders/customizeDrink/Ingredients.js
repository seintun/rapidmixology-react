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
  handleMilkClick = async () => {
    await this.state.milk === false 
    ? this.setState({ milk: true, milkStatus: 'No Milk' })
    : this.setState({ milk: false, milkStatus: 'Lactose-free milk added' })
    this.props.handleIngredientsChoice(this.state)
  }
  // Plus or Minus sugar by increments of 0.25
  handlePlusSugarClick = async () => {
    await this.state.sugar !== 2.00 
    ? this.setState({ sugar: (this.state.sugar + 0.25) }) 
    : this.setState({ sugar: 2.00 })
    this.props.handleIngredientsChoice(this.state)
  }
  handleMinusSugarClick = async () => {
    await this.state.sugar !== 0.00 
    ? this.setState({ sugar: (this.state.sugar - 0.25) }) 
    : this.setState({ sugar: 0.00 })
    this.props.handleIngredientsChoice(this.state)
  }
  // Plus or Minus ice by increments of 0.25
  handlePlusIceClick = async () => {
    await this.state.ice !== 2.00 
    ? this.setState({ ice: (this.state.ice + 0.25) }) 
    : this.setState({ ice: 2.00 })
    this.props.handleIngredientsChoice(this.state)
  }
  handleMinusIceClick = async () => {
    await this.state.ice !== 0.00 
    ? this.setState({ ice: (this.state.ice - 0.25) }) 
    : this.setState({ ice: 0.00 })
    this.props.handleIngredientsChoice(this.state)
  }

  render() {
    return (
      <div>
        <Segment>
          <Button.Group>
            <Button onClick={ this.handleMilkClick }>
              Remove
            </Button>
            <Button.Or />
            <Button positive onClick={ this.handleMilkClick }>
              Add
            </Button>
            <Label>
              <Icon name='cubes' />
              { this.state.milkStatus }
            </Label>
          </Button.Group>

        </Segment>
        <Segment>
          <Button.Group>
            <Button onClick={ this.handleMinusSugarClick }>
              <Icon name='minus square' />
              Less
            </Button>
            <Button.Or />
            <Button positive onClick={ this.handlePlusSugarClick }>
              <Icon name='plus square' />
              More
            </Button>
            <Label>
              <Icon name='cubes' />
              Sugar Level: { this.state.sugar * 100 }%
            </Label>
          </Button.Group>
        </Segment>
        <Segment>
          <Button.Group>
            <Button onClick={this.handleMinusIceClick}>
              <Icon name='minus square' />
              Less
            </Button>
            <Button.Or />
            <Button positive onClick={this.handlePlusIceClick}>
              <Icon name='plus square' />
              More
            </Button>
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
