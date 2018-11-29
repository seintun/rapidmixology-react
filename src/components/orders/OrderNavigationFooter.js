import React from 'react'
import { Menu } from 'semantic-ui-react'

const OrderNavigationFooter = () => (
  <div>
    <Menu fixed='bottom' inverted>
      <Menu.Item 
        icon='left chevron' 
        content='Back' as='a' />
      <Menu.Item 
        position='right'
        icon='right chevron' 
        content='Forward' as='a' />
    </Menu>
  </div>

)

export default OrderNavigationFooter