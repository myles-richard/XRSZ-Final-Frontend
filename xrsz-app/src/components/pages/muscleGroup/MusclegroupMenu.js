import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const MusclegroupMenu = () => {
    return (
        <Segment >
            <Menu  pointing >
            <Menu.Item
                name='UpperBody'
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
            />
            <Menu.Item
                name='Core'
                // active={activeItem === 'messages'}
                // onClick={this.handleItemClick}
            />
            <Menu.Item
                name='LowerBody'
                // active={activeItem === 'friends'}
                // onClick={this.handleItemClick}
            />
            </Menu>
        </Segment>
    )
}

export default MusclegroupMenu;
