import React, { Component } from 'react'
import { Image, Item, List } from 'semantic-ui-react'

export default class CheckoutItems extends Component {
  state= {}
  render() {
    console.log(this.props.orders, '$$$')
    const drink = this.props.orders.drink
    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='https://source.unsplash.com/featured/?{milk tea}' />

            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Featuring {drink.tea_id} </Item.Meta>
              <Item.Description>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </Item.Description>
              <Item.Extra>
                <List>
                  <List.Item>
                    <List.Icon name='lemon outline' />
                    <List.Content>
                      { drink.milk ? 'With milk' : 'Without milk'}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='lemon outline' />
                    <List.Content>
                      Ice: { drink.ice * 100}%
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='lemon outline' />
                    <List.Content>
                      Sugar: { drink.sugar * 100}%
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}