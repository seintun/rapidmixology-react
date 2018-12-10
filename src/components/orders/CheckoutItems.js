import React, { Component } from 'react'
import { Image, Item, List } from 'semantic-ui-react'

export default class CheckoutItems extends Component {
  state= {
  }
  render() {
    const { tea_id, milk, sugar, ice } = this.props.drink
    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='https://source.unsplash.com/featured/?{milk tea}' />

            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Featuring { tea_id } </Item.Meta>
              <Item.Description>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </Item.Description>
              <Item.Extra>
                <List>
                  <List.Item>
                    <List.Icon name='lemon outline' />
                    <List.Content>
                      { milk ? 'With milk' : 'Without milk'}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='lemon outline' />
                    <List.Content>
                      Ice: { ice * 100 }%
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='lemon outline' />
                    <List.Content>
                      Sugar: { sugar * 100 }%
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