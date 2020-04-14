import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './NavBar.css';

export const NavBar = ({ title }) => {
    return (
        <Menu size="huge" inverted >
            
            <Menu.Item 
            name="XRSZ">
                {title}
            </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Link to="/">Landing</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/workout">workout</Link>
                    </Menu.Item>
                </Menu.Menu>
        </Menu>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
}

NavBar.defaultProps = {
    title: 'XRSZ',
}
export default NavBar;