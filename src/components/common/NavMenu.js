import React, { Component } from 'react'
import { Button, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import OrderDashboard from '../orders/OrderDashboard'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleShowClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Menu inverted>
          <Menu.Item>
            <Button primary onClick={this.handleShowClick}>Menu</Button>
          </Menu.Item>
          <Menu.Item>
            <h3>Rapid Mixology</h3>
          </Menu.Item>
          <Menu.Item className="right">
            <Icon name="log out"></Icon>
          </Menu.Item>
        </Menu>
      <div>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='user' />
            Profile
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='setting' />
            Settings
          </Menu.Item>
        </Sidebar>

        <OrderDashboard />

        <Segment raised>
          <Header as='h3'>Header 1</Header>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsam adipisci ut animi perferendis consectetur veniam laboriosam tempora. Eveniet quas officiis libero laboriosam tempora tenetur illum nemo adipisci architecto quis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda magni quasi hic molestiae eius ipsa suscipit consequatur aut. Placeat obcaecati magnam corporis ullam molestiae repudiandae nobis praesentium eum ea? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quibusdam dolor esse nesciunt inventore iure, amet ullam ab facere qui doloribus ea cupiditate doloremque consequatur ut, mollitia tempore soluta saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit minus inventore aperiam dicta nemo nam vitae nostrum quas voluptates veniam. Sint alias ducimus ipsa! Itaque sint quia officia nisi enim?</p>
        </Segment>
        <Segment raised>
          <Header as='h3'>Header 2</Header>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsam adipisci ut animi perferendis consectetur veniam laboriosam tempora. Eveniet quas officiis libero laboriosam tempora tenetur illum nemo adipisci architecto quis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda magni quasi hic molestiae eius ipsa suscipit consequatur aut. Placeat obcaecati magnam corporis ullam molestiae repudiandae nobis praesentium eum ea? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quibusdam dolor esse nesciunt inventore iure, amet ullam ab facere qui doloribus ea cupiditate doloremque consequatur ut, mollitia tempore soluta saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit minus inventore aperiam dicta nemo nam vitae nostrum quas voluptates veniam. Sint alias ducimus ipsa! Itaque sint quia officia nisi enim?</p>
        </Segment>
        </div>
      </div>
    )
  }
}
