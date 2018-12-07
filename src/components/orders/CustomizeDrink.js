import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import TeasList from './customizeDrink/TeasList'
import ToppingsList from './customizeDrink/ToppingsList'
import Ingredients from './customizeDrink/Ingredients'
import { 
  fetchTeas, 
  fetchToppings 
} from './customizeDrink/customize.actions'

class CustomizeDrink extends Component {
  render(){
    return(
      <div>
        <Segment.Group>
          <Segment>
            <TeasList 
              teas={this.props.teas} 
              fetchTeas={this.props.fetchTeas} 
              handleTeaChoice={ this.props.handleTeaChoice }
            />
          </Segment>
          <Segment>
            <h4>Topping Selection <em>(Pick one or more)</em>:</h4>
            <ToppingsList 
              toppings={this.props.toppings} 
              fetchToppings={this.props.fetchToppings}
              handleToppingChoice={ this.props.handleToppingChoice }
            />
          </Segment>
          <Segment>
            <Ingredients handleIngredientsChoice={ this.props.handleIngredientsChoice } />
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
const mapStateToProps  = state => ({
  ...state.customize
})

const mapDispatchToProps = dispatch => ({
  fetchTeas: () => dispatch(fetchTeas()),
  fetchToppings: () => dispatch(fetchToppings())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeDrink)